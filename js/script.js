document.addEventListener("DOMContentLoaded", function() {

    let cursorBackground = document.getElementById('cursor-background');
let lastMouseX, lastMouseY, lastTimestamp;
let targetSize = 30;
let baseSize = 30; 
let maxSize = 50;

const updateCursor = () => {
    const currentSize = parseFloat(cursorBackground.style.width);
    const newSize = currentSize + (targetSize - currentSize) * 0.2;
    cursorBackground.style.width = `${newSize}px`;
    cursorBackground.style.height = `${newSize}px`;

    requestAnimationFrame(updateCursor);
};

document.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let currentTime = performance.now();

    if (lastMouseX !== undefined && lastMouseY !== undefined) {
        let dx = mouseX - lastMouseX;
        let dy = mouseY - lastMouseY;
        let dt = currentTime - lastTimestamp;
        let speed = Math.sqrt(dx * dx + dy * dy) / dt;

        targetSize = Math.min(maxSize, baseSize + speed * 20);
    }

    cursorBackground.style.left = `${mouseX - cursorBackground.offsetWidth / 2}px`;
    cursorBackground.style.top = `${mouseY - cursorBackground.offsetHeight / 2}px`;

    lastMouseX = mouseX;
    lastMouseY = mouseY;
    lastTimestamp = currentTime;
});

requestAnimationFrame(updateCursor);

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

