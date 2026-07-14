// ===============================
// COUNTDOWN
// ===============================

const birthday = new Date("August 17, 2026 00:00:00");

const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date();
    const difference = birthday - now;


    if (difference <= 0) {

        countdown.innerHTML = "🎉 Happy Birthday My Love 🎂";
        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


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

setInterval(updateCountdown,1000);



// ===============================
// PAGE SWITCHING
// ===============================

const home = document.getElementById("home");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");
const libraryPage = document.getElementById("libraryPage");


const surpriseBtn =
document.getElementById("surpriseBtn");


const continueBtn =
document.getElementById("continueBtn");


const envelope =
document.getElementById("envelope");



surpriseBtn.addEventListener("click",()=>{

    home.classList.add("hidden");

    envelopePage.classList.remove("hidden");

});



// ===============================
// OPEN ENVELOPE
// ===============================


envelope.addEventListener("click",()=>{


    const flap =
    document.querySelector(".envelope-flap");


    flap.style.transform =
    "rotateX(180deg)";


    setTimeout(()=>{


        envelopePage.classList.add("hidden");


        letterPage.classList.remove("hidden");


    },900);



});




// ===============================
// ENTER HOME
// ===============================


continueBtn.addEventListener("click",()=>{


    letterPage.classList.add("hidden");


    libraryPage.classList.remove("hidden");


});




// ===============================
// MUSIC BUTTON
// ===============================


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");


let playing = false;



musicBtn.addEventListener("click",()=>{


    if(!playing){


        music.play();


        playing = true;


        musicBtn.innerHTML="⏸️";


    }else{


        music.pause();


        playing=false;


        musicBtn.innerHTML="🎵";


    }


});



// ===============================
// FLOATING STARS
// ===============================


setInterval(()=>{


const star=document.createElement("div");


star.innerHTML="✨";


star.style.position="fixed";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-20px";

star.style.fontSize="18px";

star.style.pointerEvents="none";


document.body.appendChild(star);



setTimeout(()=>{

star.style.transition="5s";

star.style.top=window.innerHeight+"px";


},50);



setTimeout(()=>{

star.remove();

},5000);



},1200);