const birthday = new Date("August 17, 2026 00:00:00");

const countdown = document.getElementById("countdown");
const surpriseBtn = document.getElementById("surpriseBtn");

const home = document.getElementById("home");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");

const envelope = document.getElementById("envelope");

function updateCountdown() {

    const now = new Date();
    const difference = birthday - now;

    if (difference <= 0) {
        countdown.innerHTML = "🎉 Happy Birthday! 🎉";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    countdown.innerHTML = `
<div class="time-box">
    <div class="time-number">${days}</div>
    <div class="time-label">Days</div>
</div>

<div class="time-box">
    <div class="time-number">${hours}</div>
    <div class="time-label">Hours</div>
</div>

<div class="time-box">
    <div class="time-number">${minutes}</div>
    <div class="time-label">Minutes</div>
</div>

<div class="time-box">
    <div class="time-number">${seconds}</div>
    <div class="time-label">Seconds</div>
</div>
`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ---------- OPEN SURPRISE ---------- */

surpriseBtn.addEventListener("click", () => {

    home.style.opacity = "0";

    setTimeout(() => {

        home.classList.add("hidden");

        envelopePage.classList.remove("hidden");

        envelopePage.style.opacity = "0";

        setTimeout(() => {

            envelopePage.style.opacity = "1";

        }, 100);

    }, 700);

});

/* ---------- OPEN ENVELOPE ---------- */

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        envelopePage.style.opacity = "0";

        setTimeout(() => {

            envelopePage.classList.add("hidden");

            letterPage.classList.remove("hidden");

            letterPage.style.opacity = "0";

            setTimeout(() => {

                letterPage.style.opacity = "1";

            }, 100);

        }, 600);

    }, 900);

});
