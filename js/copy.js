document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('button[aria-label="More"]');
    const menu = document.querySelector('[data-radix-popper-content-wrapper]');

    if (btn && menu) {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            const isVisible = menu.style.display === "block";

            if (isVisible) {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        });

        // Close when clicking anywhere outside
        document.addEventListener("click", () => {
            menu.style.display = "none";
        });
    }

    // Handle dropdown menu items with chevron-right icons
    const menuLinks = document.querySelectorAll('#table-of-contents a.toclink');

    menuLinks.forEach(link => {
        // Check if this link has a chevron-right icon (indicates it has sub-items)
        const chevron = link.querySelector('svg[style*="chevron-right"]');

        if (chevron) {
            // Prevent navigation and handle as dropdown
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();

                const parentLi = link.closest('li');
                let submenu = parentLi.querySelector('.submenu');

                // Check if submenu already exists
                if (submenu) {
                    // Toggle visibility
                    const isVisible = submenu.style.display !== 'none';
                    submenu.style.display = isVisible ? 'none' : 'block';
                    chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
                } else {
                    // Fetch and create submenu
                    const href = link.getAttribute('href');
                    if (!href) return;

                    try {
                        // Show loading state
                        chevron.style.transform = 'rotate(45deg)';
                        chevron.style.opacity = '0.5';

                        const response = await fetch(href);
                        const html = await response.text();

                        // Parse the HTML to extract submenu items
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');

                        // Find the submenu items in the fetched page
                        const targetPageMenu = doc.querySelector('#table-of-contents');
                        if (!targetPageMenu) return;

                        // Get the current page's title to find matching section
                        const linkText = link.textContent.trim().replace(/\s+/g, ' ');

                        // Find all links in the target page's menu
                        const allLinks = Array.from(targetPageMenu.querySelectorAll('a.toclink'));
                        let foundMainLink = false;
                        const submenuItems = [];

                        for (const targetLink of allLinks) {
                            const targetText = targetLink.textContent.trim().replace(/\s+/g, ' ');

                            if (targetText.includes(linkText.split('–')[0].trim())) {
                                foundMainLink = true;
                                continue;
                            }

                            if (foundMainLink) {
                                const targetHref = targetLink.getAttribute('href');
                                // Check if this is a sub-item (relative path starting with the parent's path)
                                if (targetHref && (targetHref.includes('/') || targetHref.startsWith(href.split('/').pop().replace('.html', '')))) {
                                    submenuItems.push({
                                        text: targetText,
                                        href: href.substring(0, href.lastIndexOf('/') + 1) + targetHref
                                    });
                                } else {
                                    // Reached next main section
                                    break;
                                }
                            }
                        }

                        if (submenuItems.length > 0) {
                            // Create submenu element
                            submenu = document.createElement('ul');
                            submenu.className = 'submenu flex flex-col gap-y-0.5 ml-4 mt-1';
                            submenu.style.display = 'block';

                            submenuItems.forEach(item => {
                                const li = document.createElement('li');
                                li.className = 'flex flex-col';

                                const a = document.createElement('a');
                                a.className = link.className;
                                a.href = item.href;
                                a.textContent = item.text;
                                a.style.paddingLeft = '1.5rem';
                                a.style.fontSize = '0.85rem';

                                li.appendChild(a);
                                submenu.appendChild(li);
                            });

                            parentLi.appendChild(submenu);
                            chevron.style.transform = 'rotate(90deg)';
                        }

                        chevron.style.opacity = '1';
                    } catch (error) {
                        console.error('Error loading submenu:', error);
                        chevron.style.transform = 'rotate(0deg)';
                        chevron.style.opacity = '1';
                    }
                }
            });
        }
    });
});
