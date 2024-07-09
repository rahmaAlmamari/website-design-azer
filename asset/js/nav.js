// JavaScript for toggling the navigation links
const toggleNavButton = document.getElementById("toggleNavButton");
const navLinks = document.querySelector(".nav-links");

toggleNavButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Highlight the active link in the navigation bar
const links = document.querySelectorAll(".nav-links li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    // Remove the highlight from all links
    links.forEach(link => {
      link.style.color = "white";
      link.style.borderBottom = "none";
    });
    
    // Apply the highlight to the clicked link
    link.style.color = "#c77dff";
    link.style.borderBottom = "2px solid #c77dff";
  });
});

// Apply initial style to the "الرئيسية" link
const homeLink = document.querySelector(".nav-links li:last-child a");
homeLink.style.color = "#c77dff";
homeLink.style.borderBottom = "2px solid #c77dff";

// JavaScript for changing navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
