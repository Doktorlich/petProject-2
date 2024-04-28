import "./style-about.scss";
import "/style.scss";
let transCoef = 0;
const peopleItems = document.querySelectorAll(".people__item").forEach(item => {
    item.style.transform = `translateX(calc(131px * ${transCoef})) `;
    transCoef = transCoef + 1;
});

// const classLazy = document.querySelector(".block-hidden-lazy");
// const allSection = document.querySelectorAll(".section");

// const appearanceSection = function (entries, observer) {
//     const entry = entries[0];
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove("block-hidden-lazy");
//     entry.target.style.transition = "all 2s";
//     observer.unobserve(entry.target);
// };
// const sectionObserveOptions = {
//     root: null,
//     threshold: 0.1,

//     // rootMargin: 0,
// };

// const sectionObserve = new IntersectionObserver(appearanceSection, sectionObserveOptions);

// allSection.forEach(section => {
//     section.classList.add("block-hidden-lazy");
//     sectionObserve.observe(section);
// });

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
