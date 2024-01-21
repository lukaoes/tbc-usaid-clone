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

// header on scroll
const updateHeaderOnScroll = () => {
    let lastScroll = window.pageYOffset;
    let header = document.getElementById("main-header");

    window.onscroll = () => {
        let scrollNow = window.pageYOffset;

        if (scrollNow === 0) {
            header.style.backgroundColor = "#1A1E1F";
            header.style.opacity = "1";
            header.style.top = "0";
        } else if (lastScroll > scrollNow) {
            header.style.top = "0";
            header.style.backgroundColor = "#222222F2";
            header.style.opacity = "0.99";
        } else {
            header.style.top = "-69px";
            header.style.opacity = "0.99";
        }

        lastScroll = scrollNow;
    };
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