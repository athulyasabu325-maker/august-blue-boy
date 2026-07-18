const openBtn = document.getElementById("openBtn");
const envelopeSection = document.getElementById("envelopeSection");
const cakeSection = document.getElementById("cakeSection");
const surprise = document.getElementById("surprise");
const celebrate = document.getElementById("celebrate");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
    envelopeSection.classList.remove("hidden");

    setTimeout(() => {
        cakeSection.classList.remove("hidden");
    }, 1000);

    setTimeout(() => {
        surprise.classList.remove("hidden");
    }, 1800);

    if (music) {
        music.play().catch(() => {});
    }
});

celebrate.addEventListener("click", () => {
    createConfetti();
    alert("🎉 Happy Birthday! Wishing you lots of happiness, love, success and wonderful memories! 💙");
});

function createConfetti() {
    for (let i = 0; i < 120; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = ["🎉","✨","💙","🎈","🎊"][Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (15 + Math.random() * 20) + "px";
        confetti.style.transition = "transform 4s linear, opacity 4s";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = `translateY(${window.innerHeight + 100}px) rotate(720deg)`;
            confetti.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}
