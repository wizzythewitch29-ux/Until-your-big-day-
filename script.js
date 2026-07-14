const openLetter = document.getElementById("openLetter");
const overlay = document.getElementById("letterOverlay");
const typedText = document.getElementById("typedText");
const continueButton = document.getElementById("continueButton");


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
openLetter.addEventListener("click", () => {

    overlay.classList.add("show");

    // Show the letter first
    document.querySelector(".letter").style.display = "block";

    // Hide the door
    document.getElementById("doorScene").style.display = "none";

    // Hide the button until typing is finished
    continueButton.style.display = "none";

    // Start typing
    typeLetter();

});
/* ==========================
      TYPE ANIMATION
========================== */
let index = 0;
function typeLetter() {

    index = 0;

    typedText.innerHTML = "";

    continueButton.style.display = "none";

    const typing = setInterval(() => {

        typedText.innerHTML += message.charAt(index);

        index++;

        if(index >= message.length){

            clearInterval(typing);

            continueButton.style.display = "block";

        }

    },35);

}

/* ==========================
      CONTINUE BUTTON
========================== */
continueButton.addEventListener("click", () => {

    // Hide the letter
    document.querySelector(".letter").style.display = "none";

    // Show the door
    document.getElementById("doorScene").style.display = "flex";

});


/* ==========================
      CLOSE LETTER
========================== */

overlay.addEventListener("click",(event)=>{

    if(event.target===overlay){

        overlay.classList.remove("show");

    }

});
/* ==========================
      ENTER THE ROOM
========================== */

const room = document.getElementById("room");
const speech = document.getElementById("speech");

continueButton.addEventListener("click", () => {

    // Close the letter
    overlay.classList.remove("show");

    // Wait for the fade animation
    setTimeout(() => {

        // Hide the first page
        document.querySelector(".container").style.display = "none";

        // Show the cozy room
        room.classList.add("show");

        // Character speaks
        setTimeout(() => {

            speech.classList.add("show");

        },1200);

    },600);

});
/* ==========================
      TEDDY
========================== */

const teddy = document.querySelector(".teddy");

teddy.addEventListener("click",()=>{

    speech.innerHTML="🧸 Hehe... I was waiting for you, Baboo!";

    speech.classList.add("show");

});
/* ==========================
        GIFT
========================== */

const gift = document.querySelector(".gift");

gift.addEventListener("click",()=>{

    speech.innerHTML="🎁 Not yet, Baboo! Your birthday isn't here yet. 🤭";

    speech.classList.add("show");

});
/* ==========================
        CAKE
========================== */

const cake = document.querySelector(".cake");

cake.addEventListener("click",()=>{

    speech.innerHTML="🎂 Save the cake for August 17! 💙";

    speech.classList.add("show");

});
const room = document.getElementById("room");
const speech = document.getElementById("speech");
const door = document.getElementById("door");

door.addEventListener("click", () => {

    door.classList.add("open");

    setTimeout(() => {

        overlay.classList.remove("show");

        document.querySelector(".container").style.display = "none";

        room.classList.add("show");

        setTimeout(() => {

            speech.classList.add("show");

        }, 1200);

    }, 1500);

});
