const enterScreen = document.getElementById("enterScreen");
const siteContent = document.getElementById("siteContent");
const music = document.getElementById("bgMusic");

/* ENTER PARTICLES */
const enterParticles = document.querySelector(".enterParticles");
for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (4 + Math.random() * 4) + "s";
  enterParticles.appendChild(p);
}

/* ENTER LOGIC */
enterScreen.addEventListener("click", () => {
  music.play();
  enterScreen.style.display = "none";
  siteContent.style.display = "block";
});

/* NORMAL PARTICLES */
const particles = document.querySelector(".particles");
for (let i = 0; i < 40; i++) {
  const p = document.createElement("div");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (6 + Math.random() * 6) + "s";
  particles.appendChild(p);
}

/* ROSES */
const roseLayer = document.querySelector(".roseLayer");
setInterval(() => {
  const rose = document.createElement("img");
  rose.src = "rose.png";
  rose.style.left = Math.random() * 100 + "vw";
  roseLayer.appendChild(rose);
  setTimeout(() => rose.remove(), 18000);
}, 700);

/* BOOK */
const bookIcon = document.getElementById("bookIcon");
const bookOverlay = document.getElementById("bookOverlay");
const closeBook = document.getElementById("closeBook");

bookIcon.addEventListener("click", () => bookOverlay.style.display = "flex");
closeBook.addEventListener("click", () => bookOverlay.style.display = "none");

/* GIF */
const bomb = document.getElementById("secretBomb");
const gifOverlay = document.getElementById("gifOverlay");

bomb.addEventListener("click", () => gifOverlay.style.display = "flex");
gifOverlay.addEventListener("click", () => gifOverlay.style.display = "none");

/* PROPOSAL */
let yesCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainPage = document.getElementById("mainPage");
const acceptPage = document.getElementById("acceptPage");

noBtn.addEventListener("click", () => {
  yesBtn.style.transform = `scale(${1 + yesCount * 0.2 + 0.2})`;
  yesCount++;
});

yesBtn.addEventListener("click", () => {
  yesCount++;
  if (yesCount >= 4) {
    mainPage.classList.add("hidden");
    acceptPage.classList.remove("hidden");
  }
});