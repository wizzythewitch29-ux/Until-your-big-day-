// Birthday Countdown 🌙✨
const birthday = new Date("August 17, 2026 00:00:00");
function updateCountdown() {
    const now = new Date();
    const difference = birthday - now;
    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
        "Happy Birthday! 🎂✨";
        return;
    }
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );
    document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
// Begin Our Story Button 💌
const surpriseBtn = document.getElementById("surpriseBtn");
surpriseBtn.addEventListener("click", () => {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("envelopePage")
    .classList.remove("hidden");
});
// Envelope click ✉️
const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
    document.getElementById("envelopePage")
    .classList.add("hidden");
    document.getElementById("letterPage")
    .classList.remove("hidden");
});
// Continue button 📖
const continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", () => {
    alert("More surprises coming soon... 🌙✨");
});