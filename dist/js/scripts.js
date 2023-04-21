const sliders = {
    1: {
        slidesClass: 'job_cards',
        dotsClass: 'slider-link'
    },
    2: {
        slidesClass: 'companies_items',
        dotsClass: 'companies-slider-link'
    }
}

let slideIndex = 1;

for (let idx in sliders) {
    showSlides(idx, slideIndex);
}

function plusSlides(idx, n) {
    showSlides(idx, slideIndex += n);
}

function currentSlide(idx, n) {
    showSlides(idx, slideIndex = n);
}

function showSlides(idx, n) {
    let i;
    let slides = document.getElementsByClassName(sliders[idx].slidesClass);
    let dots = document.getElementsByClassName(sliders[idx].dotsClass);

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}