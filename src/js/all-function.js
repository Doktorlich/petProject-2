const tabListItem = document.querySelector(".tab__list-items");
const tabMarkerItems = Array.from(document.getElementsByClassName("tab__line-span"));
const tabItems = Array.from(document.getElementsByClassName("tab__item"));
const tabContentItems = Array.from(document.getElementsByClassName("tab__content-item"));

// блок с вкладками
function switchTab(tabIndex) {
    tabMarkerItems.forEach(item => {
        item.classList.remove("active-span");
    });
    tabItems.forEach(item => {
        item.classList.remove("active-item");
        item.style.transition = "0.5s";
    });
    tabContentItems.forEach(item => {
        item.classList.add("hidden");
        item.style.transition = "0.5s";
    });

    tabMarkerItems[tabIndex].classList.add("active-span");
    tabItems[tabIndex].classList.add("active-item");
    tabContentItems[tabIndex].classList.remove("hidden");
}
switchTab(0);
tabListItem.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.classList.contains("tab__item")) {
        let tabIndex = tabItems.indexOf(e.target);
        switchTab(tabIndex);
    }
    return;
});
//////////////////////////////////////////////////////////////////////////////// Повявление блоков при прокрутке

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
////////////////////////////////////////////---------------------------------------------------------------------
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
        let href = e.target.getAttribute("href");

        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        
    });
});
window.addEventListener("click", (e) => {
    console.log(e.target);
})
///////////////////// появление стрелки для прокрутки вверх
const arrowTop = document.querySelector(".scroll-arrow-top");
const header = document.querySelector(".header");

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
beginObserver.observe(header);

arrowTop.addEventListener("click", function (e) {
    console.log(e);
    header.scrollIntoView({ behavior: "smooth" });
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
