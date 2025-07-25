// Toggle navigation for mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Update the current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}