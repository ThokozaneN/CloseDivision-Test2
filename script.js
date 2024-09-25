// Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const lightModeIcon = document.getElementById('lightMode');
const darkModeIcon = document.getElementById('darkMode');
const body = document.body;

// Toggle between light and dark modes
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Switch icons for the theme toggle
    if (body.classList.contains('dark-mode')) {
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    } else {
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    }

    // Switch the logo images for light and dark modes
    const lightLogo = document.querySelector('.light-logo');
    const darkLogo = document.querySelector('.dark-logo');
    const lightHeroImage = document.querySelector('.light-hero-image');
    const darkHeroImage = document.querySelector('.dark-hero-image');
    const lightAboutImage = document.querySelector('.light-about-image');
    const darkAboutImage = document.querySelector('.dark-about-image');

    if (body.classList.contains('dark-mode')) {
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'block';
        lightHeroImage.style.display = 'none';
        darkHeroImage.style.display = 'block';
        lightAboutImage.style.display = 'none';
        darkAboutImage.style.display = 'block';
    } else {
        lightLogo.style.display = 'block';
        darkLogo.style.display = 'none';
        lightHeroImage.style.display = 'block';
        darkHeroImage.style.display = 'none';
        lightAboutImage.style.display = 'block';
        darkAboutImage.style.display = 'none';
    }
});

// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the display of the nav menu for mobile view and animate the hamburger icon to X
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    body.classList.toggle('nav-open');  // To prevent scrolling in the background when menu is open
});

// Close menu when clicking anywhere outside of it
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        body.classList.remove('nav-open');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Price toggle between monthly and once-off fees
const feeToggle = document.getElementById('feeTypeToggle');
const prices = document.querySelectorAll('.price');

feeToggle.addEventListener('change', function () {
    prices.forEach(price => {
        if (feeToggle.checked) {
            price.textContent = ` ${price.getAttribute('data-monthly')}`; // Monthly price
        } else {
            price.textContent = ` ${price.getAttribute('data-once')}`; // Once-off price
        }
    });
});
