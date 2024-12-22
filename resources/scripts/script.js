/*// Sticky navigation - Ändrar färg vid scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar'); // Hämtar navbar
    if (window.scrollY > 50) { // Om scroll är större än 50px
        navbar.style.backgroundColor = '#000000'; // Solid svart bakgrund
        navbar.style.boxShadow = '0 2px 10px rgba(200, 230, 100, 0.5)'; // Lägger till skugga
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Halvtransparent
        navbar.style.boxShadow = 'none'; // Tar bort skugga
    }
});

// Scroll reveal effect
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    function checkScroll() {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                reveal.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});*/

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('nav ul');

    // Mobilmeny
    menuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        navList.classList.toggle('active');
    });

    // Back to Top-knapp
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
});


