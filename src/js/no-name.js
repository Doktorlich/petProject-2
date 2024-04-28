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
    entry.target.style.transition = "all 2s"
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
////////////////////////////////////////////
