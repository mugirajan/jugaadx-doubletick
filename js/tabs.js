/**
 * Tab Panel Handler
 * Handles switching between tabs in tablist components
 */

(function() {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTabs);
    } else {
        initTabs();
    }

    function initTabs() {
        // Find all tablists
        const tablists = document.querySelectorAll('[role="tablist"]');

        tablists.forEach(function(tablist) {
            const tabs = tablist.querySelectorAll('[role="tab"]');

            tabs.forEach(function(tab) {
                tab.addEventListener('click', function(e) {
                    e.preventDefault();
                    activateTab(tab, tablist);
                });

                // Keyboard navigation
                tab.addEventListener('keydown', function(e) {
                    handleKeydown(e, tab, tabs);
                });
            });
        });
    }

    function activateTab(selectedTab, tablist) {
        const tabs = tablist.querySelectorAll('[role="tab"]');
        const panelId = selectedTab.getAttribute('aria-controls');
        const tabContainer = tablist.closest('div');

        // Find all tabpanels that are siblings of the tablist
        let tabpanels = [];
        if (tabContainer) {
            tabpanels = tabContainer.parentElement.querySelectorAll('[role="tabpanel"]');
        }

        // If no tabpanels found, try finding them by ID from aria-controls
        if (tabpanels.length === 0) {
            tabs.forEach(function(tab) {
                const pId = tab.getAttribute('aria-controls');
                const panel = document.getElementById(pId);
                if (panel) {
                    tabpanels.push(panel);
                }
            });
        }

        // Deactivate all tabs
        tabs.forEach(function(tab) {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');

            // Remove active-tab class from parent wrapper
            const wrapper = tab.closest('div.relative');
            if (wrapper) {
                wrapper.classList.remove('active-tab', 'text-tint-strong', 'bg-transparent');
                wrapper.classList.add('text-tint', 'bg-tint-12/1');
            }
        });

        // Hide all panels
        tabpanels.forEach(function(panel) {
            // Hide the inner content div
            const innerDiv = panel.querySelector('.p-4');
            if (innerDiv) {
                innerDiv.setAttribute('hidden', '');
            } else {
                panel.setAttribute('hidden', '');
            }
        });

        // Activate selected tab
        selectedTab.setAttribute('aria-selected', 'true');
        selectedTab.setAttribute('tabindex', '0');
        selectedTab.focus();

        // Add active-tab class to parent wrapper
        const activeWrapper = selectedTab.closest('div.relative');
        if (activeWrapper) {
            activeWrapper.classList.add('active-tab', 'text-tint-strong', 'bg-transparent');
            activeWrapper.classList.remove('text-tint', 'bg-tint-12/1');
        }

        // Show selected panel
        const selectedPanel = document.getElementById(panelId);
        if (selectedPanel) {
            const innerDiv = selectedPanel.querySelector('.p-4');
            if (innerDiv) {
                innerDiv.removeAttribute('hidden');
            } else {
                selectedPanel.removeAttribute('hidden');
            }
        }
    }

    function handleKeydown(e, currentTab, tabs) {
        const tabsArray = Array.from(tabs);
        const currentIndex = tabsArray.indexOf(currentTab);
        let newIndex;

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = tabsArray.length - 1;
                tabsArray[newIndex].click();
                break;
            case 'ArrowRight':
                e.preventDefault();
                newIndex = currentIndex + 1;
                if (newIndex >= tabsArray.length) newIndex = 0;
                tabsArray[newIndex].click();
                break;
            case 'Home':
                e.preventDefault();
                tabsArray[0].click();
                break;
            case 'End':
                e.preventDefault();
                tabsArray[tabsArray.length - 1].click();
                break;
        }
    }
})();
