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

  // 3. Tab switching logic for Cal Poly coursework PDFs WITH dynamic button text
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(button => {
  const showText = button.getAttribute('data-show-text');
  const hideText = button.getAttribute('data-hide-text');

  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    const targetContent = document.getElementById(tabId);

    if (button.classList.contains('active')) {
      // If already active, hide it
      button.classList.remove('active');
      targetContent.classList.remove('active');
      button.textContent = showText;
    } else {
      // Hide all others
      tabLinks.forEach(btn => {
        btn.classList.remove('active');
        const btnShowText = btn.getAttribute('data-show-text');
        if (btnShowText) {
          btn.textContent = btnShowText; 
        }
      });
      tabContents.forEach(content => content.classList.remove('active'));

      // Activate the clicked tab
      button.classList.add('active');
      targetContent.classList.add('active');
      if (hideText) {
        button.textContent = hideText;
      }
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

  // 6. AOS (Animate On Scroll) initialization
  AOS.init();

  // 7. Toggle active state for map points on click (simulate hover on mobile)
  const mapPoints = document.querySelectorAll('.svg-overlay .map-point');
  mapPoints.forEach(mapPoint => {
    mapPoint.addEventListener('click', () => {
      if (mapPoint.classList.contains('active')) {
        mapPoint.classList.remove('active');
      } else {
        mapPoints.forEach(mp => mp.classList.remove('active'));
        mapPoint.classList.add('active');
      }
    });
  });

  // 8. Toggle active state for work cards on tap (for mobile)
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach(card => {
    card.addEventListener('click', () => {
      workCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
