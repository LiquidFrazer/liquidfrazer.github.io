let yesCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainPage = document.getElementById("mainPage");
const acceptPage = document.getElementById("acceptPage");
const cursor = document.getElementById("cursor");
const bomb = document.getElementById("secretBomb");
const overlay = document.getElementById("gifOverlay");
const photoIcon = document.getElementById("photoIcon");
const photoBooth = document.getElementById("photoBooth");
const galleryGrid = document.getElementById("galleryGrid");

/* Cursor */
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Click Glow */
document.addEventListener("click", e => {
    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    glow.style.width = "20px";
    glow.style.height = "20px";
    glow.style.borderRadius = "50%";
    glow.style.background = "radial-gradient(circle, crimson 0%, transparent 70%)";
    glow.style.animation = "glowExpand 0.6s forwards";
    document.body.appendChild(glow);
    setTimeout(() => glow.remove(), 600);
});

/* YES / NO */
noBtn.addEventListener("click", () => {
    yesBtn.style.transform = `scale(${1 + yesCount * 0.4 + 0.3})`;
    yesCount++;
});

yesBtn.addEventListener("click", () => {
    yesCount++;
    if (yesCount >= 4) {
        mainPage.style.display = "none";
        acceptPage.style.display = "block";
    }
});

/* Secret Bomb */
bomb.addEventListener("click", () => overlay.style.display = "flex");
overlay.addEventListener("click", () => overlay.style.display = "none");

/* Floating Roses */
function createRose() {
    const rose = document.createElement("img");
    rose.src = "rose.png";
    rose.className = "rose";
    rose.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(rose);
    setTimeout(() => rose.remove(), 30000);
}
setInterval(createRose, 4000);

/* Photo Booth Toggle */
photoIcon.addEventListener("click", () => {
    photoBooth.style.display = photoBooth.style.display === "flex" ? "none" : "flex";
});

/* Auto Load Photos (photo1.jpg, photo2.jpg...) */
for (let i = 1; i <= 20; i++) {
    const img = new Image();
    img.src = `photos/photo${i}.jpg`;
    img.onload = function() {
        const div = document.createElement("div");
        div.className = "photoItem";
        div.appendChild(img);
        galleryGrid.appendChild(div);
    };
}
