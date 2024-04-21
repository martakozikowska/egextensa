// zatrzymanie karuzeli .clients-logos

const slider = document.querySelector('.clients-slider');

slider.addEventListener('mouseenter', function() {
    this.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', function() {
    this.style.animationPlayState = 'running';
});

// animacja h2 w .eg-section

document.addEventListener('scroll', function() {
    var h2Element = document.querySelector('.eg-section-h2');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var elementOffsetTop = h2Element.offsetTop;
    var elementHeight = h2Element.offsetHeight;

    if (scrollPosition > elementOffsetTop - windowHeight + elementHeight) {
        h2Element.classList.add('show');
    }
});

// animacja h2 w .about-us-h2

document.addEventListener('scroll', function() {
    var h2Element = document.querySelector('.about-us-h2');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var elementOffsetTop = h2Element.offsetTop;
    var elementHeight = h2Element.offsetHeight;

    if (scrollPosition > elementOffsetTop - windowHeight + elementHeight) {
        h2Element.classList.add('show');
    }
});

// animacja h4 w .clients-h4

document.addEventListener('scroll', function() {
    var h2Element = document.querySelector('.clients-h4');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var elementOffsetTop = h2Element.offsetTop;
    var elementHeight = h2Element.offsetHeight;

    if (scrollPosition > elementOffsetTop - windowHeight + elementHeight) {
        h2Element.classList.add('show');
    }
});