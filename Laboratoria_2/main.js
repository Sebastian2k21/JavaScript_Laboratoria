let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const paginationContainer = document.querySelector(".pagination");

function updateSlide() {
    sliderWrapper.style.transform = `translateX(-${100 * currentSlide}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".pagination span");
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentSlide ? "#333" : "#ccc";
    });
}

slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.onclick = () => {
        currentSlide = index;
        updateSlide();
    };
    paginationContainer.appendChild(dot);
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

let interval = setInterval(nextSlide, 3000);

document.getElementById("nextSlide").onclick = nextSlide;
document.getElementById("prevSlide").onclick = prevSlide;

document.getElementById("pauseResume").onclick = function() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        this.textContent = "Wznów";
    } else {
        interval = setInterval(nextSlide, 3000);
        this.textContent = "Pauza";
    }
};
