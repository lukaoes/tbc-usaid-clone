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
const headerChange = () => {
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

const watchSizeChange = () => {
    if (window.innerWidth < 768) {
        headerChange();
    } else {
        let header = document.getElementById("main-header");
        header.style.top = "0";
        header.style.opacity = "1";
        window.onscroll = null;
    }
};

watchSizeChange();

window.onresize = () => {
    watchSizeChange();
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

// slider
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let autoSlideTimeout;
let delayTimeout;
let x1 = null;

// create dots for slider
const dotsContainer = document.querySelector('.slider-dots');
const dots = Array.from({ length: totalSlides }, (_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => goToSlide(i));
    return dot;
});

