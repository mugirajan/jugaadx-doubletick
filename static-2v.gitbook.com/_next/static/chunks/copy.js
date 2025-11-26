document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('button[aria-label="More"]');
    const menu = document.querySelector('[data-radix-popper-content-wrapper]');

    if (!btn || !menu) return;

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
});


