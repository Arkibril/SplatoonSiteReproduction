const themeButton = document.getElementById("themeButton");
let isDark = false;

themeButton.addEventListener("click", () => {
  document.body.style.backgroundColor = isDark ? "#fffbf0" : "#1e1e1e";
  document.body.style.color = isDark ? "#2b2b2b" : "#f5f5f5";
  isDark = !isDark;
});

// POP-UP LOGIQUE
const popup = document.getElementById('popupAd');
const closeBtn = document.querySelector('.close-btn');
const popupVideo = document.getElementById('popupVideo');

// Afficher la pub après 3 secondes
setTimeout(() => {
  popup.classList.remove('hidden');
}, 3000);

// Fermer la pub
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // empêcher l'agrandissement
  popup.classList.add('hidden');
});

// Agrandir / réduire en cliquant sur la vidéo
popup.addEventListener('click', () => {
  popup.classList.toggle('fullscreen');
});
