// Example of adding a parallax effect to the background on scroll
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;

    // Adjust the background position based on scroll
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
