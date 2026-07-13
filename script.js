// ===============================
// BIRTHDAY COUNTDOWN
// ===============================

const birthday = new Date("August 17, 2026 00:00:00");

const countdown = document.getElementById("countdown");
const surpriseBtn = document.getElementById("surpriseBtn");
const continueBtn = document.getElementById("continueBtn");

const home = document.getElementById("home");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");

const envelope = document.getElementById("envelope");

function updateCountdown() {

    const now = new Date();

    const difference = birthday - now;

    if (difference <= 0) {

        countdown.innerHTML = "🎉 Happy Birthday My Love 🎂";

        playBirthdayMusic();

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

    countdown.innerHTML =
        `${days} Days<br>${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ===============================
// BEGIN STORY
// ===============================

surpriseBtn.addEventListener("click", () => {

    home.classList.add("hidden");

    envelopePage.classList.remove("hidden");

});

// ===============================
// OPEN ENVELOPE
// ===============================

envelope.addEventListener("click", () => {

    envelope.style.pointerEvents = "none";

    const cover = document.querySelector(".cover");

    cover.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        envelopePage.classList.add("hidden");

        letterPage.classList.remove("hidden");

    }, 900);

});

// ===============================
// CONTINUE
// ===============================

continueBtn.addEventListener("click", () => {

    alert("Chapter One coming soon... 💙");

});

// ===============================
// BIRTHDAY MUSIC
// ===============================

const music = new Audio("music.mp3");

music.loop = true;

function playBirthdayMusic() {

    music.play().catch(() => {});

}
// ======================================
// FUTURE CHAPTER SYSTEM (READY TO EXPAND)
// ======================================

// These functions are placeholders for after your exams.
// We'll replace them with the real chapter pages later.

function openChapter(number) {

    alert("Chapter " + number + " is still sleeping... 🌙");

}

function lockMessage() {

    alert("Come back tomorrow for the next page. 💙");

}

// ======================================
// BIRTHDAY CHECK
// ======================================

const today = new Date();

const isBirthday =
today.getMonth() === 7 && today.getDate() === 17;

// August = month 7 in JavaScript

if(isBirthday){

    document.body.classList.add("birthday-mode");

}

// ======================================
// SMALL SPARKLES
// ======================================

setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = "-30px";

    star.style.fontSize = (12 + Math.random() * 12) + "px";

    star.style.opacity = Math.random();

    star.style.pointerEvents = "none";

    star.style.transition = "5s linear";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.top = window.innerHeight + 50 + "px";

    },50);

    setTimeout(() => {

        star.remove();

    },5000);

},900);

// ======================================
// PRELOAD MUSIC
// ======================================

window.addEventListener("load",()=>{

    music.load();

});

// ======================================
// END
// ======================================