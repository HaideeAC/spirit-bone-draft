// JavaScript for menu circle
const menuCircle = document.getElementById("menu-circle");
const navLinks = document.getElementById("nav-links");

menuCircle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Navigation transition effect
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Only add transition if the navigation is currently active
    if (navLinks.classList.contains("active")) {
      event.preventDefault();

      const clickedLink = this;
      const destination = clickedLink.getAttribute("href");

      // Add 'selected' class to the clicked link's parent
      clickedLink.parentElement.classList.add("nav-selected");

      // Add 'fading' class to all other links' parents
      document.querySelectorAll(".nav-links li a").forEach((otherLink) => {
        if (otherLink !== clickedLink) {
          otherLink.parentElement.classList.add("nav-fading");
        }
      });

      // Add fading class to the background
      navLinks.classList.add("nav-background-fade");

      // After transition completes, navigate to the destination
      setTimeout(() => {
        window.location.href = destination;
      }, 1000); // Match this duration with your CSS animation duration
    }
  });
});

// JavaScript for form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById("contactForm").reset();
  });

  // Contact form submission with validation
const contactForm = document.querySelector('.contact-form-container');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;
    
    if (!name || !email || !message || !consent) {
      alert('Please fill out all fields and accept the data processing consent.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Success message - in a real implementation, you would submit to a server
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}