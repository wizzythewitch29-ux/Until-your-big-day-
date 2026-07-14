/* ==========================
        COUNTDOWN
========================== */

const birthday = new Date("August 17, 2026 00:00:00");

function updateCountdown() {

    const now = new Date();

    const difference = birthday - now;

    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Baboo! 🎂";

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

    document.getElementById("countdown").innerHTML =

        `${days} Days<br>
         ${hours} Hours
         ${minutes} Minutes
         ${seconds} Seconds`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================
      LETTER MESSAGE
========================== */

const message = `Hello Baboo... 🧸

If you're reading this,

it means another day has brought us closer to your birthday.

I wanted to make you something more than a gift.

So...

I made you a little world.

A place where every day another little piece of my heart waits for you.

Whenever you're ready...

Come inside. 💙`;
/* ==========================
      OPEN LETTER
========================== */

const openLetter = document.getElementById("openLetter");
const overlay = document.getElementById("letterOverlay");
const typedText = document.getElementById("typedText");
const continueButton = document.getElementById("continueButton");

openLetter.addEventListener("click", () => {

    overlay.classList.add("show");

    typedText.innerHTML = "";

    continueButton.style.display = "none";

    typeLetter();

});

/* ==========================
      TYPE ANIMATION
========================== */

let index = 0;

function typeLetter() {

    index = 0;

    typedText.innerHTML = "";

    const typing = setInterval(() => {

        typedText.innerHTML += message.charAt(index);

        index++;

        if (index >= message.length) {

            clearInterval(typing);

            continueButton.style.display = "block";

        }

    }, 35);

}
/* ==========================
      CONTINUE BUTTON
========================== */

continueButton.addEventListener("click", () => {

    overlay.classList.remove("show");

    setTimeout(() => {

        alert(
`🚪 Welcome to Baboo's World!

Version 3 will include:

🏡 Cozy Room
🌙 Ghibli atmosphere
🩷 Your character
📖 Daily chapters
⭐ Hidden surprises`
        );

    },300);

});

/* ==========================
      CLOSE LETTER
========================== */

overlay.addEventListener("click",(event)=>{

    if(event.target===overlay){

        overlay.classList.remove("show");

    }

});
