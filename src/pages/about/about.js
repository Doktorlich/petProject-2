import "./style-about.scss";
import "/style.scss";
let transCoef = 0;
const peopleItems = document.querySelectorAll(".people__item");
peopleItems.forEach(item => {
    item.style.transform = `translateX(calc(131px * ${transCoef})) `;
    transCoef = transCoef + 1;
});

const classLazy = document.querySelector(".block-hidden-lazy");
const allSection = document.querySelectorAll(".section");

const appearanceSection = function (entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("block-hidden-lazy");
    entry.target.style.transition = "all 2s";
    observer.unobserve(entry.target);
};
const sectionObserveOptions = {
    root: null,
    threshold: 0.1,

    // rootMargin: 0,
};

const sectionObserve = new IntersectionObserver(appearanceSection, sectionObserveOptions);

allSection.forEach(section => {
    section.classList.add("block-hidden-lazy");
    sectionObserve.observe(section);
});

const clientLists = document.querySelectorAll(".reviews-client__list");
const arrowLeft = document.querySelector(".switch__arrow-left");
const arrowRight = document.querySelector(".switch__arrow-right");

const countCurrent = document.querySelector(".count-current");
const countLength = document.querySelector(".count-length");

let currentSlide = 0;
const maxSlides = clientLists.length;

countLength.innerHTML = maxSlides;
function movingSlide(element) {
    clientLists.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - element) * 100}%)`;
        slide.style.transition = "all 0.1s";
    });
}

movingSlide(0);
function prevSlide() {
    if (currentSlide === 0) {
        arrowLeft.classList.add("no-active");
        countCurrent.innerHTML = currentSlide + 1;
    } else {
        currentSlide--;
        countCurrent.innerHTML = currentSlide + 1;
        arrowRight.classList.remove("no-active");
    }
    movingSlide(currentSlide);
}
function nextSlide() {
    if (currentSlide === maxSlides - 1) {
        arrowRight.classList.add("no-active");
        countCurrent.innerHTML = currentSlide + 1;
    } else {
        currentSlide++;
        countCurrent.innerHTML = currentSlide + 1;
        arrowLeft.classList.remove("no-active");
    }

    movingSlide(currentSlide);
}
arrowLeft.addEventListener("click", prevSlide);
arrowRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});
////////////////////////////////////////////////////////////////////////////////

const langueActive = document.querySelector(".switch-langue__name");
//родитель для делегирования событий при выборе языка
const langueList = document.querySelector(".switch-langue__langue-list");
//svg
const svgClickLng = document.querySelector(".svg-langue-arrow");
//событие для отображения блока с выбором языка
svgClickLng.addEventListener("click", e => {
    e.preventDefault();
    svgClickLng.classList.add("svg-langue-arrow-active");
    langueList.classList.remove("hidden");
});
langueList.addEventListener("mouseleave", e => {
    e.preventDefault();
    svgClickLng.classList.remove("svg-langue-arrow-active");
    langueList.classList.add("hidden");
});
//слушитей для выбора и вставки значения языка
langueList.addEventListener("mouseup", e => {
    e.preventDefault();

    if (e.target.classList.contains("switch-langue__langue-p")) {
        langueActive.innerHTML = e.target.textContent;
        langueList.classList.add("hidden");
        svgClickLng.classList.remove("svg-langue-arrow-active");
    }
    return;
});

///////////////////// переход к форме по кнопкам
const contactLinks = document.querySelectorAll(".btns-list__link");

contactLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const href = e.target.getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    });
});

///////////////////// появление стрелки для прокрутки вверх

const arrowTop = document.querySelector(".scroll-arrow-top");
const headerA = document.querySelector(".header-a");

const returnObserver = function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
        arrowTop.classList.remove("hidden");
    } else {
        arrowTop.classList.add("hidden");
    }
};
const optionsReturnObserver = {
    root: null,
    threshold: 0.1,
};
const beginObserver = new IntersectionObserver(returnObserver, optionsReturnObserver);
beginObserver.observe(headerA);

arrowTop.addEventListener("click", function (e) {
    console.log(e);
    headerA.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////burger

// burger burger-active
const menuAdaptList = document.querySelector(".menu-adapt__list");
const burger = document.querySelector(".burger");
burger.addEventListener("click", function (e) {
    burger.classList.add("burger-active");
    burger.style.transition = "all 1s";
    menuAdaptList.classList.remove("hidden");
});

menuAdaptList.addEventListener("mouseleave", function (e) {
    menuAdaptList.classList.add("hidden");
    burger.classList.remove("burger-active");
});
