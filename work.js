// JavaScript to make the navbar sticky after scrolling to the bottom
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const contactSection = document.getElementById('contact');
    const rect = contactSection.getBoundingClientRect();  // Get the position of the contact section

    // If the contact section is in view (at the bottom of the screen)
    if (rect.top <= window.innerHeight) {
        navbar.style.position = 'fixed';  // Make navbar fixed at the top
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'relative';  // Reset to original position
    }
});





