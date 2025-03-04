// ALL - NAV-BAR - MENU CIRCLE
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

//MEET THE TEAM - PAGE
document.addEventListener("DOMContentLoaded", function () {
  // Get all team members
  const teamMembers = document.querySelectorAll(".team-member");

  // Add random movement to enhance floating effect
  teamMembers.forEach((member) => {
    // Get the original position
    const originalTop = parseFloat(window.getComputedStyle(member).top);
    const originalLeft = parseFloat(window.getComputedStyle(member).left);

    // Handle hover state
    member.addEventListener("mouseenter", function () {
      member.classList.add("hovered");
      member.style.transform = "translate(0, 0)"; // Reset position when hovered
    });

    member.addEventListener("mouseleave", function () {
      member.classList.remove("hovered");
    });
  });

  // Mobile optimization
  function adjustForMobile() {
    const container = document.querySelector(".team-container");
    if (window.innerWidth <= 768) {
      // For mobile: make sure all team members are visible by scrolling
      container.style.overflowY = "scroll";
      container.style.height = "80vh";
    } else {
      container.style.overflowY = "hidden";
    }
  }

  // Run on load and resize
  adjustForMobile();
  window.addEventListener("resize", adjustForMobile);
});

//CONTACT US - PAGE
// Form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById("contactForm").reset();
  });

// Contact form submission with validation
const contactForm = document.querySelector(".contact-form-container");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Basic validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert(
        "Please fill out all fields and accept the data processing consent."
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message - in a real implementation, you would submit to a server
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
}
