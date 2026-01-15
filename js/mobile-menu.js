/**
 * Mobile Navigation Menu Handler
 * Makes the hamburger menu functional on mobile devices
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }

    function initMobileMenu() {
        // Get the hamburger button
        const hamburgerButton = document.querySelector('button[aria-label="Open table of contents"]');

        // Get the sidebar/navigation
        const sidebar = document.getElementById('table-of-contents');

        if (!hamburgerButton) {
            console.warn('Hamburger button not found');
            return;
        }

        if (!sidebar) {
            console.warn('Table of contents sidebar not found');
            return;
        }

        // Create and add close button to sidebar
        createCloseButton(sidebar);

        // Add click event to hamburger button
        hamburgerButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleNavigation(true);
        });

        // Close navigation when clicking outside (on overlay)
        document.addEventListener('click', function(e) {
            const isNavigationOpen = document.documentElement.classList.contains('navigation-open');

            if (isNavigationOpen &&
                !sidebar.contains(e.target) &&
                e.target !== hamburgerButton &&
                !hamburgerButton.contains(e.target)) {
                toggleNavigation(false);
            }
        });

        // Close navigation with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.documentElement.classList.contains('navigation-open')) {
                toggleNavigation(false);
            }
        });

        // Close navigation when clicking on navigation links (mobile only)
        if (window.innerWidth < 1024) {
            const navLinks = sidebar.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    // Small delay to allow navigation to occur
                    setTimeout(function() {
                        toggleNavigation(false);
                    }, 300);
                });
            });
        }
    }

    function createCloseButton(sidebar) {
        // Check if close button already exists
        if (sidebar.querySelector('.nav-close-button')) {
            return;
        }

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'nav-close-button';
        closeButton.innerHTML = '&times;';
        closeButton.setAttribute('aria-label', 'Close navigation');
        closeButton.setAttribute('type', 'button');

        // Add click event to close button
        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleNavigation(false);
        });

        // Insert close button at the beginning of sidebar
        sidebar.insertBefore(closeButton, sidebar.firstChild);
    }

    function toggleNavigation(open) {
        const html = document.documentElement;

        if (open === undefined) {
            // Toggle current state
            html.classList.toggle('navigation-open');
        } else if (open) {
            // Open navigation
            html.classList.add('navigation-open');
        } else {
            // Close navigation
            html.classList.remove('navigation-open');
        }
    }

    // Handle window resize - close menu if switching to desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 1024) {
                toggleNavigation(false);
            }
        }, 250);
    });

})();
