document.addEventListener("DOMContentLoaded", () => {
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
  });
  
  function toggleEssay() {
    const essay = document.getElementById('essay-container');
    essay.style.display = essay.style.display === 'none' ? 'block' : 'none';
  }