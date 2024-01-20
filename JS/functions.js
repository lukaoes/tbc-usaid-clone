// header menu toggle
const toggleMenu = () => {
    // hamburger menu activator
    document.querySelector('.hamburger-menu').classList.toggle('active');

    // display navigation on mobile
    const mobileNavigation = document.getElementById('mobileNavigation');
    mobileNavigation.style.right = mobileNavigation.style.right === '0px' ? '-200px' : '0px';
    mobileNavigation.style.opacity = mobileNavigation.style.right === '0px' ? '1' : '0.3';

    // overlay on main content

    const menuOpenedOverlay = document.getElementById('menu-opened-overlay');
    menuOpenedOverlay.style.display = mobileNavigation.style.right === '0px' ? 'block' : 'none';
};