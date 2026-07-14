/* ==========================
        ELEMENTS
========================== */

const openLetter = document.getElementById("openLetter");

const overlay = document.getElementById("letterOverlay");

const typedText = document.getElementById("typedText");

const continueButton = document.getElementById("continueButton");

const door = document.getElementById("door");

const doorScene = document.getElementById("doorScene");

const letterBox = document.getElementById("letterBox");

const room = document.getElementById("room");

const speech = document.getElementById("speech");

const teddy = document.querySelector(".teddy");

const gift = document.querySelector(".gift");

const cake = document.querySelector(".cake");





/* ==========================
        COUNTDOWN
========================== */


const birthday = new Date("August 17, 2026 00:00:00");


function updateCountdown(){

    const now = new Date();

    const difference = birthday - now;


    if(difference <= 0){

        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday Baboo! 🎂";

        return;

    }



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        /
        1000
    );



    document.getElementById("countdown").innerHTML =

    `${days} Days<br>
    ${hours} Hours<br>
    ${minutes} Minutes<br>
    ${seconds} Seconds`;

}



updateCountdown();

setInterval(updateCountdown,1000);







/* ==========================
        LETTER TEXT
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


openLetter.addEventListener("click",()=>{


    overlay.classList.add("show");


    letterBox.style.display="block";


    doorScene.style.display="none";


    continueButton.style.display="none";


    typeLetter();


});








/* ==========================
        TYPE EFFECT
========================== */


let index = 0;


function typeLetter(){


    index = 0;

    typedText.innerHTML="";


    const typing = setInterval(()=>{


        typedText.innerHTML += message.charAt(index);


        index++;



        if(index >= message.length){


            clearInterval(typing);


            continueButton.style.display="block";


        }



    },35);


}









/* ==========================
        SHOW DOOR
========================== */


continueButton.addEventListener("click",()=>{


    letterBox.style.display="none";


    doorScene.style.display="flex";


});








/* ==========================
        OPEN DOOR
========================== */


door.addEventListener("click",()=>{


    door.classList.add("open");



    setTimeout(()=>{


        overlay.classList.remove("show");


        document.querySelector(".container").style.display="none";


        room.classList.add("show");



        setTimeout(()=>{


            speech.classList.add("show");


        },1200);



    },1500);



});









/* ==========================
        TEDDY
========================== */


teddy.addEventListener("click",()=>{


    speech.innerHTML =
    "🧸 Hehe... I was waiting for you, Baboo!";


    speech.classList.add("show");


});








/* ==========================
        GIFT
========================== */


gift.addEventListener("click",()=>{


    speech.innerHTML =
    "🎁 Not yet, Baboo! Your birthday isn't here yet. 🤭";


    speech.classList.add("show");


});








/* ==========================
        CAKE
========================== */


cake.addEventListener("click",()=>{


    speech.innerHTML =
    "🎂 Save the cake for August 17! 💙";


    speech.classList.add("show");


});








/* ==========================
        CLOSE OVERLAY
========================== */


overlay.addEventListener("click",(event)=>{


    if(event.target === overlay){


        overlay.classList.remove("show");


    }


});
