document.addEventListener("DOMContentLoaded", function() {
    const btnUp = document.querySelector(".btn-up");

    var button = document.querySelector('.main-btn');
    setTimeout(function() {
        button.classList.add('show');
    }, 100);

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnUp.classList.add("visible");
        } else {
            btnUp.classList.remove("visible");
        }
    });

    btnUp.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const photoContainer = document.querySelector('.photo-container img');

    photoContainer.addEventListener('mouseover', function() {
        photoContainer.style.transform = 'rotateY(360deg)';
    });

    photoContainer.addEventListener('mouseout', function() {
        photoContainer.style.transform = 'rotateY(0deg)';
    });

    const navToggle = document.createElement("div");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "&#9776;";
    document.querySelector("header").appendChild(navToggle);

    navToggle.addEventListener("click", function() {
        document.querySelector(".navigation").classList.toggle("active");
    });

    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        animatedElements.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add("animated");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("resize", animateOnScroll);

    animateOnScroll(); 
});

