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

// FAQ questions accordion 
const toggleAnswer = (qnum) => {
    const answer = document.querySelector(`.answer-${qnum}`);
    const arrow = document.querySelector(`.arrow-${qnum}`);
    const isAnswerOpen = answer.classList.contains('answer-open');

    const closeAll = (selector, className) => {
        const allElements = document.querySelectorAll(selector);
        allElements.forEach((element) => element.classList.remove(className));
    };

    // closeo pened elemnts
    closeAll('.answer', 'answer-open');
    closeAll('.faq-arrow', 'open-arrow');

    if (!isAnswerOpen) {
        answer.classList.toggle('answer-open');
        arrow.classList.toggle('open-arrow');
    }
}