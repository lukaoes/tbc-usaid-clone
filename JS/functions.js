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

const arrowsContainer = document.querySelector('.slider-arrows');
const arrowLeft = document.querySelector('.slider-arrows .arrow-left');
const arrowRight = document.querySelector('.slider-arrows .arrow-right');

arrowLeft.addEventListener('click', () => {
    if (currentIndex === 0) {
        const allSlides = document.querySelectorAll('.slide');
        const lastIndex = totalSlides - 1;

        allSlides.forEach((slide, i) => {
            const opacityValue = i === lastIndex ? 1 : 0;
            slide.style.transition = 'opacity 1s ease-in-out';
            slide.style.opacity = opacityValue;
        });

        currentIndex = lastIndex;
        updateDots();

        clearTimeout(autoSlideTimeout);
        clearTimeout(delayTimeout);
        delayTimeout = setTimeout(() => {
            automaticSlideChange();
        }, 1000);
    } else {
        goToSlide(currentIndex - 1);
    }
});
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;

    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, i) => {
        const opacityValue = i === currentIndex ? 1 : 0;
        slide.style.transition = 'opacity 1s ease-in-out';
        slide.style.opacity = opacityValue;
    });

    updateDots();

    clearTimeout(autoSlideTimeout);
    clearTimeout(delayTimeout);
    delayTimeout = setTimeout(() => {
        automaticSlideChange();
    }, 1000);
});

slides.addEventListener('touchstart', (event) => {
    x1 = event.touches[0].clientX;
});

slides.addEventListener('touchmove', (event) => {
    if (!x1) return;
    const x2 = event.touches[0].clientX;
    const dx = x1 - x2;

    if (dx > 0 && currentIndex < totalSlides - 1) {
        goToSlide(currentIndex + 1);
    } else if (dx < 0 && currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else if (dx < 0 && currentIndex === 0) {
        goToSlide(totalSlides - 1);
    } else if (dx > 0 && currentIndex === totalSlides - 1) {
        goToSlide(0);
    }

    x1 = null;
});

const automaticSlideChange = () => {
    autoSlideTimeout = setTimeout(() => {
        goToSlide(currentIndex < totalSlides - 1 ? currentIndex + 1 : 0);
        automaticSlideChange();
    }, 3000);
};

slides.addEventListener('touchend', () => {
    clearTimeout(autoSlideTimeout);
    clearTimeout(delayTimeout);
    delayTimeout = setTimeout(automaticSlideChange, 3000);
});

const updateDots = () => {
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
};

const goToSlide = (index) => {
    currentIndex = index;
    const windowWidth = window.innerWidth;

    if (windowWidth > 979) {
        const allSlides = document.querySelectorAll('.slide');
        allSlides.forEach((slide, i) => {
            const opacityValue = i === index ? 1 : 0;
            slide.style.transition = 'opacity 1s ease-in-out';
            slide.style.opacity = opacityValue;
        });

        setTimeout(() => {
            allSlides.forEach((slide) => {
                slide.style.transition = 'none';
            });
            updateDots();
        }, 1000);
    } else {
        const translateValue = -index * 100 + '%';
        slides.style.transition = 'all 1s ease-in-out';
        slides.style.transform = 'translateX(' + translateValue + ')';
        updateDots();
    }

    clearTimeout(autoSlideTimeout);

    clearTimeout(delayTimeout);
    delayTimeout = setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        automaticSlideChange();
    }, 1000);
};

const handleResize = () => {
    const windowWidth = window.innerWidth;
    const allSlides = document.querySelectorAll('.slide');

    if (windowWidth > 979) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        allSlides.forEach((slide, i) => {
            const opacityValue = 1;
            slide.style.transition = 'none';
            slide.style.opacity = opacityValue;
            slide.classList.remove('slide-opacity');
        });
    } else {
        const translateValue = -currentIndex * 100 + '%';
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(' + translateValue + ')';
        allSlides.forEach((slide) => {
            slide.classList.add('slide-opacity');
        });
    }

    updateDots();
};
