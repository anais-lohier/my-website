document.addEventListener("DOMContentLoaded", () => {
  // SAS Map hover functionality
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
  
  function toggleEssay() {
    const essay = document.getElementById('essay-container');
    essay.style.display = essay.style.display === 'none' ? 'block' : 'none';
  }
  
  
  // Hamburger menu toggle logic
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) { // ensure both elements exist
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // AOS and scroll-to-top functionality
  AOS.init();
  
  const scrollBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });
});
