let yesCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainPage = document.getElementById("mainPage");
const acceptPage = document.getElementById("acceptPage");
const cursor = document.getElementById("cursor");
const bomb = document.getElementById("secretBomb");
const overlay = document.getElementById("gifOverlay");

/* Cursor */
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Click Glow */
document.addEventListener("click", e => {
    const glow = document.createElement("div");
    glow.className = "clickGlow";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    document.body.appendChild(glow);
    setTimeout(() => glow.remove(), 600);
});

/* NO grows YES */
noBtn.addEventListener("click", () => {
    yesBtn.style.transform = `scale(${1 + yesCount * 0.4 + 0.3})`;
    yesCount++;
});

/* YES 4 times */
yesBtn.addEventListener("click", () => {
    yesCount++;
    if (yesCount >= 4) {
        mainPage.style.opacity = "0";
        setTimeout(() => {
            mainPage.style.display = "none";
            acceptPage.style.display = "flex";
            roseBurst();
        }, 1000);
    }
});

/* Secret Bomb */
bomb.addEventListener("click", () => overlay.style.display = "flex");
overlay.addEventListener("click", () => overlay.style.display = "none");

/* Floating Roses */
function createRose() {
    const rose = document.createElement("img");
    rose.src = "https://pngimg.com/uploads/rose/rose_PNG669.png";
    rose.className = "rose";
    rose.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(rose);
    setTimeout(() => rose.remove(), 30000);
}
setInterval(createRose, 4000);

/* Particles */
function createParticle() {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 12000);
}
setInterval(createParticle, 150);

/* Rose Burst */
function roseBurst() {
    for (let i = 0; i < 20; i++) {
        createRose();
    }
}
