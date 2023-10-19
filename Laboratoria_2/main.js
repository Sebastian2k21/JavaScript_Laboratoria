let slideIndex = 1;

let moveRightInterval = setInterval(function() {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    clearInterval(moveRightInterval);
    
    let slidesContainer = document.getElementById("slider").querySelector(".slides");
    let slides = slidesContainer.querySelectorAll("img");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; } 
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    moveRightInterval = setInterval(function() {
        plusSlides(1);
    }, 5000);
}
