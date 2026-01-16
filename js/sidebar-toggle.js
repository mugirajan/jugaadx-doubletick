/**
 * Sidebar Dropdown Toggle Handler
 *
 * Moves the chevron button OUTSIDE the <a> tag so:
 * - Clicking the link text navigates to the page
 * - Clicking the chevron button toggles the dropdown (no navigation)
 *
 * Also preserves sidebar scroll position across page navigations.
 */

(function() {
    'use strict';

    const SCROLL_STORAGE_KEY = 'sidebar-scroll-position';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebarToggle);
    } else {
        initSidebarToggle();
    }

    function initSidebarToggle() {
        const sidebar = document.getElementById('table-of-contents');
        if (!sidebar) return;

        // Find the scroll container
        const scrollContainer = sidebar.querySelector('[data-testid="toc-scroll-container"]') || sidebar;

        // Restore scroll position from localStorage
        restoreScrollPosition(scrollContainer);

        // Save scroll position before navigating away
        saveScrollOnNavigation(sidebar, scrollContainer);

        const expandableLinks = sidebar.querySelectorAll('a.toclink');

        expandableLinks.forEach(function(link) {
            const chevronSpan = link.querySelector('span.group');
            if (!chevronSpan) return;

            const chevronSvg = chevronSpan.querySelector('svg.gb-icon');
            if (!chevronSvg) return;

            const parentLi = link.closest('li');
            if (!parentLi) return;

            const collapsibleDiv = parentLi.querySelector(':scope > div.flex.flex-col.overflow-hidden');
            if (!collapsibleDiv) return;

            // MOVE CHEVRON OUTSIDE THE LINK
            // Create a wrapper div to hold link + chevron side by side
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex; align-items:center; width:100%; gap:4px;';

            // Insert wrapper before the link
            link.parentNode.insertBefore(wrapper, link);

            // Remove chevron from inside the link
            chevronSpan.remove();

            // Move link into wrapper
            wrapper.appendChild(link);

            // Style the link to take remaining space
            link.style.flex = '1';
            link.style.minWidth = '0';

            // Create new toggle button from the chevron
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.setAttribute('aria-label', 'Toggle submenu');
            toggleBtn.style.cssText = `
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                min-width: 28px;
                padding: 4px;
                border: none;
                background: transparent;
                border-radius: 4px;
                cursor: pointer;
                flex-shrink: 0;
                transition: background-color 0.15s ease;
            `;

            // Add the SVG to the button
            toggleBtn.appendChild(chevronSpan);
            chevronSpan.style.cssText = 'display:flex; align-items:center; justify-content:center;';

            // Add button to wrapper
            wrapper.appendChild(toggleBtn);

            // Set initial chevron state
            const isExpanded = collapsibleDiv.style.opacity !== '0' &&
                              collapsibleDiv.style.height !== '0' &&
                              collapsibleDiv.style.height !== '';
            if (!isExpanded) {
                chevronSvg.classList.remove('rotate-90');
                chevronSvg.classList.add('rotate-0');
            }

            // If current page, expand it
            if (link.getAttribute('aria-current') === 'page') {
                expandItem(collapsibleDiv, chevronSvg);
            }

            // Toggle button click - ONLY toggles, never navigates
            toggleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown(collapsibleDiv, chevronSvg);
            });

            // Hover effects
            toggleBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });
            toggleBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
            });
        });

        // Auto-expand parents of current page
        expandParentsOfCurrentPage(sidebar);
    }

    function toggleDropdown(collapsibleDiv, chevronSvg) {
        const isExpanded = collapsibleDiv.style.opacity !== '0' &&
                          collapsibleDiv.style.height !== '0' &&
                          collapsibleDiv.style.height !== '';

        if (isExpanded) {
            collapseItem(collapsibleDiv, chevronSvg);
        } else {
            expandItem(collapsibleDiv, chevronSvg);
        }
    }

    function expandItem(collapsibleDiv, chevronSvg) {
        collapsibleDiv.style.height = 'auto';
        collapsibleDiv.style.opacity = '1';
        if (chevronSvg) {
            chevronSvg.classList.remove('rotate-0');
            chevronSvg.classList.add('rotate-90');
        }
    }

    function collapseItem(collapsibleDiv, chevronSvg) {
        collapsibleDiv.style.height = '0';
        collapsibleDiv.style.opacity = '0';
        if (chevronSvg) {
            chevronSvg.classList.remove('rotate-90');
            chevronSvg.classList.add('rotate-0');
        }
    }

    function expandParentsOfCurrentPage(sidebar) {
        const currentPageLink = sidebar.querySelector('a[aria-current="page"]');
        if (!currentPageLink) return;

        let element = currentPageLink.parentElement;
        while (element && element !== sidebar) {
            if (element.classList.contains('overflow-hidden')) {
                // Always expand the collapsible div, even if no toggle button exists
                expandItem(element, null);

                // Try to update the chevron if one exists
                const parentLi = element.closest('li');
                if (parentLi) {
                    // Find the toggle button we created (if any)
                    const toggleBtn = parentLi.querySelector(':scope > div > button');
                    if (toggleBtn) {
                        const chevronSvg = toggleBtn.querySelector('svg.gb-icon');
                        if (chevronSvg) {
                            chevronSvg.classList.remove('rotate-0');
                            chevronSvg.classList.add('rotate-90');
                        }
                    } else {
                        // Fallback: try to find chevron directly in the link
                        const link = parentLi.querySelector(':scope > a.toclink, :scope > div > a.toclink');
                        if (link) {
                            const chevronSvg = link.querySelector('svg.gb-icon');
                            if (chevronSvg) {
                                chevronSvg.classList.remove('rotate-0');
                                chevronSvg.classList.add('rotate-90');
                            }
                        }
                    }
                }
            }
            element = element.parentElement;
        }
    }

    // Get the actual scrollable element
    function getScrollableElement(sidebar) {
        const innerContainer = sidebar.querySelector('[data-testid="toc-scroll-container"]');
        // Check which element is actually scrollable
        if (innerContainer && innerContainer.scrollHeight > innerContainer.clientHeight) {
            return innerContainer;
        }
        if (sidebar.scrollHeight > sidebar.clientHeight) {
            return sidebar;
        }
        // Default to inner container or sidebar
        return innerContainer || sidebar;
    }

    // Save scroll position when clicking any link in sidebar
    function saveScrollOnNavigation(sidebar, scrollContainer) {
        // Save on any link click
        sidebar.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href) {
                saveScrollPosition(sidebar);
            }
        });

        // Also save on beforeunload as backup
        window.addEventListener('beforeunload', function() {
            saveScrollPosition(sidebar);
        });

        // Save periodically while scrolling
        let scrollTimeout;
        const scrollable = getScrollableElement(sidebar);
        scrollable.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                saveScrollPosition(sidebar);
            }, 100);
        });
    }

    function saveScrollPosition(sidebar) {
        try {
            const scrollable = getScrollableElement(sidebar);
            const pos = scrollable.scrollTop;
            if (pos > 0) {
                localStorage.setItem(SCROLL_STORAGE_KEY, pos.toString());
            }
        } catch (err) {}
    }

    // Restore scroll position from localStorage
    function restoreScrollPosition(scrollContainer) {
        try {
            const savedPosition = localStorage.getItem(SCROLL_STORAGE_KEY);
            if (savedPosition !== null) {
                const scrollTop = parseInt(savedPosition, 10);
                if (!isNaN(scrollTop) && scrollTop > 0) {
                    // Try multiple times with increasing delays
                    var attempts = [50, 150, 300, 500];
                    attempts.forEach(function(delay) {
                        setTimeout(function() {
                            const sidebar = document.getElementById('table-of-contents');
                            if (sidebar) {
                                const scrollable = getScrollableElement(sidebar);
                                scrollable.scrollTop = scrollTop;
                            }
                        }, delay);
                    });
                }
            }
        } catch (err) {}
    }

})();
