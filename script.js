// Sticky Navbar
window.onscroll = function() {
    stickyNavbar();
};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Smooth Scrolling for Anchor Links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const video = document.getElementById('.hover-video');

    // Play the video when mouse enters
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    // Pause the video when mouse leaves
    video.addEventListener('mouseleave', () => {
      video.pause();
    });


// Simple Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Please fill in all fields.");
        e.preventDefault();
    } else if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
