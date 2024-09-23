// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const lightModeIcon = document.getElementById('lightMode');
const darkModeIcon = document.getElementById('darkMode');
const body = document.body;
const heroLightImage = document.querySelector('.light-hero-image');
const heroDarkImage = document.querySelector('.dark-hero-image');
const aboutLightImage = document.querySelector('.light-about-image');
const aboutDarkImage = document.querySelector('.dark-about-image');
const servicesLightImage = document.querySelector('.light-services-image');
const servicesDarkImage = document.querySelector('.dark-services-image');

// Check for saved theme in localStorage
let isDarkMode = localStorage.getItem('theme') === 'dark';
if (isDarkMode) {
    body.classList.add('dark-mode');
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'block';
    heroLightImage.style.display = 'none';
    heroDarkImage.style.display = 'block';
    aboutLightImage.style.display = 'none';
    aboutDarkImage.style.display = 'block';
    servicesLightImage.style.display = 'none';
    servicesDarkImage.style.display = 'block';
} else {
    body.classList.remove('dark-mode');
    lightModeIcon.style.display = 'block';
    darkModeIcon.style.display = 'none';
    heroLightImage.style.display = 'block';
    heroDarkImage.style.display = 'none';
    aboutLightImage.style.display = 'block';
    aboutDarkImage.style.display = 'none';
    servicesLightImage.style.display = 'block';
    servicesDarkImage.style.display = 'none';
}

// Theme toggle click event
themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
        heroLightImage.style.display = 'none';
        heroDarkImage.style.display = 'block';
        aboutLightImage.style.display = 'none';
        aboutDarkImage.style.display = 'block';
        servicesLightImage.style.display = 'none';
        servicesDarkImage.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
        heroLightImage.style.display = 'block';
        heroDarkImage.style.display = 'none';
        aboutLightImage.style.display = 'block';
        aboutDarkImage.style.display = 'none';
        servicesLightImage.style.display = 'block';
        servicesDarkImage.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
