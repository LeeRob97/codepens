const rotateSpeed = 5000;
let carousel = null;
let carouselInterval = null;
let activeItem = 0;
let currentSpot = 0;

function getItemWidth() {
    const item = carousel.querySelector(".carouselSlider .item");
    return item.offsetWidth;
}

function getItemCount() {
    const items = carousel.querySelectorAll(".carouselSlider .item");
    return items.length - 1;
}

function goToItem(itemIndex) {
    let item = itemIndex;

    if(item > getItemCount()) {
        item = 0;
        return setActiveItem(item);
    }

    if(item < 0) {
        item = getItemCount();
        return setActiveItem(item);
    }

    return setActiveItem(item);
}

function setActiveItem(goToItem) {
    const items = carousel.querySelectorAll(".carouselSlider .item");

    items[activeItem].classList.remove("active");

    activeItem = goToItem;

    items[activeItem].classList.add("active");

    translateX(getItemWidth() * activeItem);
}

function translateX(itemX) {
    const carouselSlider = carousel.querySelector(".carouselSlider");
    carouselSlider.style.transform = "translateX(-"+ itemX +"px)";
}

function startCarousel() {
    carouselInterval = setInterval(function() {
        goToItem(activeItem + 1);
    }, rotateSpeed);
}

function bindNav() { 
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    prev.addEventListener("click", function(e) {
        goToItem(activeItem - 1);
    });

    next.addEventListener("click", function(e) {
        goToItem(activeItem + 1);
    });
}

window.addEventListener("load", function () {
    carousel = document.getElementById("carousel");
    startCarousel();
    bindNav();
});