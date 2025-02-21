// JavaScript for menu circle
const menuCircle = document.getElementById("menu-circle");
const navLinks = document.getElementById("nav-links");

menuCircle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// JavaScript for form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById("contactForm").reset();
  });
