/**
 * Search Functionality for JugaadX Documentation
 * Implements client-side search using a pre-generated search index
 */

(function() {
    'use strict';

    let searchIndex = [];
    let searchInputs = [];
    let searchResultsContainer = null;

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Find all search inputs
        searchInputs = Array.from(document.querySelectorAll('input[data-testid="search-input"]'));

        if (searchInputs.length === 0) {
            console.warn('No search inputs found');
            return;
        }

        // Create search results container
        createSearchResultsContainer();

        // Load search index
        loadSearchIndex();

        // Attach event listeners to all search inputs
        searchInputs.forEach(input => {
            input.addEventListener('input', handleSearch);
            input.addEventListener('focus', handleSearchFocus);
        });

        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (searchResultsContainer &&
                !searchResultsContainer.contains(e.target) &&
                !searchInputs.some(input => input.contains(e.target))) {
                hideSearchResults();
            }
        });

        // Handle keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
    }

    function createSearchResultsContainer() {
        // Create results container
        searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'search-results-container';
        searchResultsContainer.className = 'search-results-dropdown';
        searchResultsContainer.style.display = 'none';

        // Add to body
        document.body.appendChild(searchResultsContainer);
    }

    function loadSearchIndex() {
        // Get the root path by counting directory depth
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        const rootPath = depth > 0 ? '../'.repeat(depth) : './';

        fetch(rootPath + 'search-index.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load search index');
                }
                return response.json();
            })
            .then(data => {
                searchIndex = data;
                console.log(`Search index loaded: ${searchIndex.length} pages`);
            })
            .catch(error => {
                console.error('Error loading search index:', error);
            });
    }

    function handleSearchFocus(e) {
        const query = e.target.value.trim();
        if (query.length > 0 && searchIndex.length > 0) {
            performSearch(query);
            showSearchResults(e.target);
        }
    }

    function handleSearch(e) {
        const query = e.target.value.trim();

        if (query.length < 2) {
            hideSearchResults();
            return;
        }

        if (searchIndex.length === 0) {
            searchResultsContainer.innerHTML = '<div class="search-message">Loading search index...</div>';
            showSearchResults(e.target);
            return;
        }

        performSearch(query);
        showSearchResults(e.target);
    }

    function performSearch(query) {
        const lowerQuery = query.toLowerCase();
        const results = [];

        // Search through the index
        for (const page of searchIndex) {
            let score = 0;
            const titleLower = page.title.toLowerCase();
            const contentLower = page.content.toLowerCase();

            // Title match (higher score)
            if (titleLower.includes(lowerQuery)) {
                score += 10;
                // Exact match bonus
                if (titleLower === lowerQuery) {
                    score += 20;
                }
            }

            // Content match
            if (contentLower.includes(lowerQuery)) {
                score += 5;
            }

            if (score > 0) {
                results.push({
                    ...page,
                    score: score
                });
            }
        }

        // Sort by score
        results.sort((a, b) => b.score - a.score);

        // Display results
        displayResults(results.slice(0, 10), query);
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResultsContainer.innerHTML = `
                <div class="search-message">No results found for "${escapeHtml(query)}"</div>
            `;
            return;
        }

        // Calculate root path for URL construction
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        const rootPath = depth > 0 ? '../'.repeat(depth) : './';

        const resultsHTML = results.map((result, index) => {
            const highlightedTitle = highlightText(result.title, query);
            const highlightedContent = highlightText(result.content.substring(0, 150) + '...', query);
            // Construct proper URL relative to current page
            const resultUrl = rootPath + result.url;

            return `
                <a href="${resultUrl}" class="search-result-item" data-index="${index}">
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-content">${highlightedContent}</div>
                    <div class="search-result-url">${result.url}</div>
                </a>
            `;
        }).join('');

        searchResultsContainer.innerHTML = `
            <div class="search-results-header">
                Found ${results.length} result${results.length !== 1 ? 's' : ''}
            </div>
            <div class="search-results-list">
                ${resultsHTML}
            </div>
        `;
    }

    function highlightText(text, query) {
        const escapedText = escapeHtml(text);
        const escapedQuery = escapeHtml(query);
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return escapedText.replace(regex, '<mark>$1</mark>');
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function showSearchResults(inputElement) {
        if (!searchResultsContainer) return;

        // Position the results container near the input
        const rect = inputElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        searchResultsContainer.style.position = 'absolute';
        searchResultsContainer.style.top = (rect.bottom + scrollTop + 5) + 'px';
        searchResultsContainer.style.left = (rect.left + scrollLeft) + 'px';
        searchResultsContainer.style.width = Math.max(rect.width, 300) + 'px';
        searchResultsContainer.style.display = 'block';
    }

    function hideSearchResults() {
        if (searchResultsContainer) {
            searchResultsContainer.style.display = 'none';
        }
    }

    function handleKeyboardNavigation(e) {
        if (!searchResultsContainer || searchResultsContainer.style.display === 'none') {
            return;
        }

        const items = searchResultsContainer.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        const activeItem = searchResultsContainer.querySelector('.search-result-item.active');
        let currentIndex = activeItem ? parseInt(activeItem.dataset.index) : -1;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        } else if (e.key === 'Enter' && activeItem) {
            e.preventDefault();
            activeItem.click();
            return;
        } else if (e.key === 'Escape') {
            hideSearchResults();
            searchInputs.forEach(input => input.blur());
            return;
        } else {
            return;
        }

        // Update active state
        items.forEach(item => item.classList.remove('active'));
        items[currentIndex].classList.add('active');
        items[currentIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

})();
