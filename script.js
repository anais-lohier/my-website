document.addEventListener("DOMContentLoaded", () => {
  // 1. SAS Map hover functionality (if applicable)
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

  // 2. Toggle essay preview for Yale essay
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

  // 3. Tab switching logic (for Cal Poly coursework PDFs)
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' from all tab links
      tabLinks.forEach(btn => btn.classList.remove('active'));
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      // Mark the clicked tab as active
      button.classList.add('active');
      // Show the corresponding tab content
      const tabId = button.getAttribute('data-tab');
      const targetContent = document.getElementById(tabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 4. Hamburger menu toggle logic
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 5. Scroll-to-top button functionality
  const scrollBtn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });

  // 6. AOS initialization
  AOS.init();

  // 7. Toggle active state for map points on click (simulate hover on mobile)
  const mapPoints = document.querySelectorAll('.svg-overlay .map-point');
  mapPoints.forEach((mapPoint) => {
    mapPoint.addEventListener('click', function() {
      // If already active, remove 'active'
      if (mapPoint.classList.contains('active')) {
        mapPoint.classList.remove('active');
      } else {
        // Remove 'active' from any other map point
        mapPoints.forEach(mp => mp.classList.remove('active'));
        // Add 'active' to the clicked map point
        mapPoint.classList.add('active');
      }
    });
  });

  // 8. Toggle active state for work cards on tap (for mobile)
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active from all work cards
      workCards.forEach(c => c.classList.remove('active'));
      // Activate the tapped card
      card.classList.add('active');
    });
  });
});
