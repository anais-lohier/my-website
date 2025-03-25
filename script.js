document.addEventListener("DOMContentLoaded", () => {
  // SAS Map hover functionality (if applicable)
  const sasMap = document.getElementById("sas-map");
  if (sasMap) {
    sasMap.addEventListener("mouseover", () => {
      sasMap.innerHTML = `
        <ul>
          <li>Japan 🇯🇵</li>
          <li>Vietnam 🇻🇳</li>
          <li>India 🇮🇳</li>
          <li>Kenya 🇰🇪</li>
          <li>South Africa 🇿🇦</li>
          <li>Brazil 🇧🇷</li>
          <li>Morocco 🇲🇦</li>
        </ul>`;
    });
  
    sasMap.addEventListener("mouseout", () => {
      sasMap.innerHTML = "Hover to see destinations ✈️";
    });
  }
  
  // Toggle essay preview for Yale essay
  const toggleEssay = document.getElementById('toggleEssay');
  const essayPreview = document.getElementById('essayPreview');
  if (toggleEssay && essayPreview) {
    toggleEssay.addEventListener('click', (e) => {
      e.preventDefault();
      if (essayPreview.style.display === 'none' || essayPreview.style.display === '') {
        essayPreview.style.display = 'block';
        toggleEssay.innerText = 'Hide essay';
      } else {
        essayPreview.style.display = 'none';
        toggleEssay.innerText = 'Read my admission essay';
      }
    });
  }
  
  // Hamburger menu toggle logic
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Scroll-to-top functionality
  const scrollBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });
  
  // AOS initialization
  AOS.init();
  
  // Toggle active state for map points on click (simulate hover on mobile)
  const mapPoints = document.querySelectorAll('.svg-overlay .map-point');
  mapPoints.forEach((mapPoint) => {
    mapPoint.addEventListener('click', function() {
      // If already active, remove the active class.
      if (mapPoint.classList.contains('active')) {
        mapPoint.classList.remove('active');
      } else {
        // Remove active class from any other map point.
        mapPoints.forEach(mp => mp.classList.remove('active'));
        // Add active class to the clicked map point.
        mapPoint.classList.add('active');
      }
    });
  });
});