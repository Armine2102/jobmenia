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
    let slides = document.getElementsByClassName(sliders[idx].slidesClass + (window.screen.availWidth <= 991 ? ' mobile' : ''));
    let dots = document.getElementsByClassName(sliders[idx].dotsClass);

   if (slides.length) {
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
}

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.nav_toggle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('nav_toggle_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('nav_toggle_active');
            menu.classList.toggle('menu_active');
        })
    })

    let cols = document.querySelectorAll('.collapsible')


    cols.forEach(coll => {
        coll.addEventListener("click", function() {
            cols.forEach(item => {
                if (item !== coll) {
                    item.classList.remove('active')
                    let content = item.nextElementSibling
                    content.style.display = 'none'
                }
            })

            this.classList.toggle("active");
            let content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    })

})
