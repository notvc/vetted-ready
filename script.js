const bannerContent = document.querySelector('.banner-content');

if (bannerContent) {
    const logos = Array.from(bannerContent.children);
    // Clone the logos to ensure enough width for a seamless loop on large screens.
    for (let i = 0; i < 11; i++) {
        logos.forEach(logo => bannerContent.appendChild(logo.cloneNode(true)));
    }
}
const headers = document.querySelectorAll(".question-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    
    // Toggle the clicked item
    item.classList.toggle("active");
  });
});

/* Hamburger Menu Toggle */
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.li-right');

if (hamburger && navMenu) {
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => {
        const isOpen = hamburger.classList.toggle('active');

        navMenu.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.setAttribute('role', 'button');
    hamburger.setAttribute('tabindex', '0');
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.setAttribute('aria-expanded', 'false');

    hamburger.addEventListener('click', toggleMenu);

    hamburger.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
