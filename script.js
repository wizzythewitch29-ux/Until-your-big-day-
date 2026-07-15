/* ==========================================================
                LETTER OVERLAY
========================================================== */

.overlay{
position:fixed;
inset:0;
background:rgba(4,8,20,.82);
backdrop-filter:blur(12px);
-webkit-backdrop-filter:blur(12px);
display:flex;
justify-content:center;
align-items:center;
opacity:0;
visibility:hidden;
transition:opacity .5s ease,visibility .5s ease;
z-index:1000;
}

.overlay.show{
opacity:1;
visibility:visible;
}

.letter{
width:min(92%,760px);
transform:translateY(40px) scale(.96);
opacity:0;
transition:transform .6s cubic-bezier(.19,1,.22,1),opacity .6s ease;
}

.overlay.show .letter{
transform:translateY(0) scale(1);
opacity:1;
}

.paper{
position:relative;
background:linear-gradient(180deg,#fffdf8 0%,#f8f3ea 100%);
border-radius:28px;
padding:55px 50px;
box-shadow:0 25px 80px rgba(0,0,0,.35);
overflow:hidden;
}

.paper::before{
content:"";
position:absolute;
inset:0;
background:
radial-gradient(circle at top left,rgba(255,220,230,.18),transparent 35%),
radial-gradient(circle at bottom right,rgba(220,235,255,.18),transparent 35%);
pointer-events:none;
}

.paper h2{
text-align:center;
font-size:2.2rem;
font-weight:700;
color:#4b5fa6;
margin-bottom:35px;
}

#typedText{
min-height:260px;
font-size:1.08rem;
line-height:2;
color:#444;
white-space:pre-line;
position:relative;
z-index:2;
}

#continueButton{
display:none;
margin:40px auto 0;
padding:16px 42px;
border:none;
border-radius:999px;
background:linear-gradient(135deg,#ffdce8,#d8ebff);
color:#35529a;
font-family:"Quicksand",sans-serif;
font-size:1rem;
font-weight:700;
cursor:pointer;
box-shadow:0 10px 25px rgba(0,0,0,.15);
transition:transform .3s ease,box-shadow .3s ease;
}

#continueButton:hover{
transform:translateY(-3px) scale(1.03);
box-shadow:0 16px 35px rgba(0,0,0,.22);
}

/* ==========================================================
                WOODEN DOOR
========================================================== */

.doorScene{
display:none;
justify-content:center;
align-items:center;
margin-bottom:40px;
}

.doorFrame{
width:220px;
height:360px;
padding:10px;
border-radius:18px;
background:linear-gradient(180deg,#5f3d25,#3e2415);
box-shadow:0 20px 60px rgba(0,0,0,.35);
}

.door{
position:relative;
width:100%;
height:100%;
border-radius:14px;
background:linear-gradient(180deg,#9b6d43,#7a4f2b);
transform-origin:left center;
transition:transform 1.4s cubic-bezier(.19,1,.22,1);
cursor:pointer;
overflow:hidden;
}

.door::before{
content:"";
position:absolute;
inset:0;
background:
repeating-linear-gradient(
90deg,
rgba(255,255,255,.06) 0px,
rgba(255,255,255,.06) 2px,
transparent 2px,
transparent 26px
);
}

.door.open{
transform:perspective(1200px) rotateY(-105deg);
}

.knob{
position:absolute;
right:22px;
top:50%;
width:14px;
height:14px;
border-radius:50%;
background:#ffd66b;
box-shadow:0 0 12px rgba(255,214,107,.9);
transform:translateY(-50%);
}

/* ==========================================================
                COZY ROOM
========================================================== */

.room{
position:fixed;
inset:0;
display:none;
justify-content:center;
align-items:center;
flex-direction:column;
background:
linear-gradient(180deg,#1b2447 0%,#3f5fa8 55%,#6f4f36 55%,#5b3f2b 100%);
overflow:hidden;
z-index:2000;
}

.room.show{
display:flex;
animation:roomFade 1s ease;
}

@keyframes roomFade{
from{opacity:0;transform:scale(1.03);}
to{opacity:1;transform:scale(1);}
}

.room::before{
content:"";
position:absolute;
top:-120px;
right:-120px;
width:420px;
height:420px;
border-radius:50%;
background:radial-gradient(circle,rgba(255,255,220,.35),transparent 70%);
filter:blur(20px);
pointer-events:none;
}

.window{
position:absolute;
top:70px;
right:110px;
width:240px;
height:280px;
border-radius:20px;
background:linear-gradient(180deg,#18376b,#6f99ff);
border:10px solid #7b5538;
box-shadow:0 0 40px rgba(180,220,255,.45);
overflow:hidden;
}

.window::before{
content:"";
position:absolute;
inset:0;
background:
repeating-linear-gradient(
80deg,
transparent 0px,
transparent 12px,
rgba(255,255,255,.16) 13px,
transparent 15px
);
animation:rain .45s linear infinite;
}

@keyframes rain{
from{transform:translateY(-30px);}
to{transform:translateY(30px);}
}

.fireplace{
position:absolute;
bottom:70px;
left:120px;
width:180px;
height:180px;
background:#8b5a3c;
border:8px solid #6e4227;
border-radius:22px;
box-shadow:0 0 40px rgba(255,170,60,.45);
}

.fireplace::before{
content:"";
position:absolute;
bottom:28px;
left:28px;
width:116px;
height:78px;
border-radius:18px;
background:linear-gradient(180deg,#ffb347,#ff7a00);
animation:fireGlow 2s ease-in-out infinite alternate;
}

@keyframes fireGlow{
from{opacity:.7;box-shadow:0 0 10px rgba(255,170,60,.35);}
to{opacity:1;box-shadow:0 0 30px rgba(255,170,60,.8);}
}

.rug{
position:absolute;
bottom:45px;
width:440px;
height:150px;
border-radius:100px;
background:radial-gradient(circle,#ffd8e8,#f6a8c7);
box-shadow:0 0 35px rgba(255,190,220,.35);
}

.books{
position:absolute;
left:70px;
top:120px;
width:150px;
height:230px;
border-radius:14px;
background:#5d3d28;
border:6px solid #3d2618;
box-shadow:0 0 20px rgba(0,0,0,.25);
}

.plant{
position:absolute;
right:90px;
bottom:80px;
width:90px;
height:130px;
}

.teddy{
position:absolute;
bottom:120px;
left:50%;
transform:translateX(-50%);
font-size:78px;
filter:drop-shadow(0 6px 8px rgba(0,0,0,.25));
animation:teddyBounce 2.5s ease-in-out infinite;
cursor:pointer;
}

@keyframes teddyBounce{
0%,100%{transform:translateX(-50%) translateY(0);}
50%{transform:translateX(-50%) translateY(-8px);}
}

.gift{
position:absolute;
right:230px;
bottom:95px;
font-size:72px;
cursor:pointer;
transition:transform .3s ease;
}

.gift:hover{
transform:scale(1.08);
}

.cake{
position:absolute;
left:310px;
bottom:95px;
font-size:72px;
animation:cakeFloat 3s ease-in-out infinite;
cursor:pointer;
}

@keyframes cakeFloat{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-6px);}
}

/* ==========================================================
                YOUR CHARACTER
========================================================== */

.you{
position:absolute;
right:320px;
bottom:95px;
width:92px;
height:190px;
display:flex;
flex-direction:column;
align-items:center;
animation:idle 3s ease-in-out infinite;
}

.head{
width:58px;
height:58px;
border-radius:50%;
background:#ffe8d9;
position:relative;
box-shadow:0 3px 8px rgba(0,0,0,.2);
}

.head::before{
content:"";
position:absolute;
top:-8px;
left:-3px;
width:64px;
height:36px;
border-radius:40px 40px 20px 20px;
background:#4a2c22;
}

.body{
margin-top:-5px;
width:70px;
height:104px;
border-radius:24px;
background:linear-gradient(180deg,#dce9ff,#b9cfff);
}

@keyframes idle{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-6px);}
}

.speech{
position:absolute;
right:410px;
bottom:300px;
background:#fff;
color:#444;
padding:14px 20px;
border-radius:18px;
font-weight:700;
font-size:18px;
box-shadow:0 10px 25px rgba(0,0,0,.18);
opacity:0;
transform:translateY(10px);
transition:opacity .6s ease,transform .6s ease;
}

.speech.show{
opacity:1;
transform:translateY(0);
}

/* ==========================================================
                RESPONSIVE
========================================================== */

@media (max-width:768px){

.container{
padding:35px 28px;
width:92%;
}

#title{
font-size:2.5rem;
}

h2{
font-size:1.05rem;
}

#countdown{
font-size:1.8rem;
}

.moon{
width:110px;
height:110px;
top:25px;
right:25px;
}

.window{
width:180px;
height:220px;
right:30px;
top:60px;
}

.fireplace{
left:30px;
bottom:55px;
width:150px;
height:150px;
}

.rug{
width:320px;
height:120px;
}

.you{
right:120px;
bottom:90px;
}

.speech{
right:30px;
bottom:280px;
font-size:15px;
}

}
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 2
========================================================== */

/* -----------------------------
        DOOR
------------------------------ */

door.addEventListener("click",()=>{

door.style.pointerEvents="none";

door.classList.add("open");

setTimeout(()=>{

doorScene.style.display="none";

letter.style.display="block";

requestAnimationFrame(()=>{

typeLetter();

});

},1400);

});

/* -----------------------------
        ENTER ROOM
------------------------------ */

continueButton.addEventListener("click",()=>{

overlay.classList.remove("show");

setTimeout(()=>{

document.querySelector(".container").style.opacity="0";

document.querySelector(".container").style.transform="translateY(30px)";

setTimeout(()=>{

document.querySelector(".container").style.display="none";

room.classList.add("show");

setTimeout(()=>{

speech.classList.add("show");

speech.innerHTML="You made it... 💙";

},900);

},500);

},300);

});

/* -----------------------------
        DIALOGUE
------------------------------ */

const dialogue={

welcome:[
"Welcome home. 💙",
"I've been waiting for you.",
"Our little world is finally open."
],

teddy:[
"I kept your seat warm.",
"Every room needs a teddy.",
"Hehe... don't leave me here."
],

gift:[
"Not yet...",
"Your birthday deserves patience.",
"Come back on the right day."
],

cake:[
"One day closer.",
"The candles are waiting.",
"Almost time..."
]

};

function randomText(list){

return list[Math.floor(Math.random()*list.length)];

}

function speak(text){

speech.classList.remove("show");

setTimeout(()=>{

speech.innerHTML=text;

speech.classList.add("show");

},120);

}

/* -----------------------------
        INTERACTIONS
------------------------------ */

teddy.addEventListener("click",()=>{

speak(randomText(dialogue.teddy));

});

gift.addEventListener("click",()=>{

speak(randomText(dialogue.gift));

});

cake.addEventListener("click",()=>{

speak(randomText(dialogue.cake));

});

/* -----------------------------
        CLOSE LETTER
------------------------------ */

overlay.addEventListener("click",(event)=>{

if(event.target===overlay){

overlay.classList.remove("show");

door.classList.remove("open");

door.style.pointerEvents="auto";

doorScene.style.display="none";

letter.style.display="block";

}

});
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 3
                Atmosphere Engine
========================================================== */

/* -----------------------------
        FIREPLACE
------------------------------ */

let fireIntensity = 0;

setInterval(() => {

fireIntensity = Math.random() * 15 + 20;

document.documentElement.style.setProperty(

"--fireGlow",

`${fireIntensity}px`

);

},180);

/* -----------------------------
        WINDOW RAIN
------------------------------ */

const windowPane=document.querySelector(".window");

function lightning(){

if(Math.random()>0.985){

windowPane.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(2.6)"

},

{

filter:"brightness(1)"

}

],{

duration:350

});

}

requestAnimationFrame(lightning);

}

lightning();

/* -----------------------------
        SPEECH
------------------------------ */

let speechTimeout;

function speak(text){

clearTimeout(speechTimeout);

speech.classList.remove("show");

setTimeout(()=>{

speech.innerHTML=text;

speech.classList.add("show");

speechTimeout=setTimeout(()=>{

speech.classList.remove("show");

},4000);

},120);

}

/* -----------------------------
        CHARACTER IDLE
------------------------------ */

const character=document.querySelector(".you");

setInterval(()=>{

character.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-4px)"

},

{

transform:"translateY(0)"

}

],{

duration:2500,

easing:"ease-in-out"

});

},2600);

/* -----------------------------
        BLINK
------------------------------ */

const head=document.querySelector(".head");

function blink(){

head.animate([

{

transform:"scaleY(1)"

},

{

transform:"scaleY(.96)"

},

{

transform:"scaleY(1)"

}

],{

duration:140

});

const nextBlink=

Math.random()*3500+2500;

setTimeout(blink,nextBlink);

}

blink();

/* -----------------------------
        ROOM AMBIENCE
------------------------------ */

const ambience=[

"Welcome home. 💙",

"The stars look beautiful tonight.",

"I've been waiting for you.",

"Another day closer...",

"I'm glad you're here."

];

let ambienceIndex=0;

setInterval(()=>{

if(room.classList.contains("show")){

speak(ambience[ambienceIndex]);

ambienceIndex++;

if(ambienceIndex>=ambience.length){

ambienceIndex=0;

}

}

},30000);

/* -----------------------------
        SMOOTH CURSOR
------------------------------ */

document.querySelectorAll("button,.gift,.cake,.teddy,.letterButton").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

}

],{

duration:180,

fill:"forwards"

});

});

item.addEventListener("mouseleave",()=>{

item.animate([

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:180,

fill:"forwards"

});

});

});
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 4
                Daily Chapter Engine
========================================================== */

/* --------------------------------------------------
                CHAPTER SYSTEM
-------------------------------------------------- */

const TOTAL_CHAPTERS = 35;

const STORAGE_KEY = "until_your_big_day_progress";

const START_DATE = new Date("2026-07-13T00:00:00");

const BIRTHDAY = new Date("2026-08-17T00:00:00");

let saveData = JSON.parse(

localStorage.getItem(STORAGE_KEY)

) || {

opened:[]

};

/* --------------------------------------------------
            DAYS PASSED
-------------------------------------------------- */

function getUnlockedChapter(){

const today = new Date();

today.setHours(0,0,0,0);

const diff =

today - START_DATE;

const passed =

Math.floor(

diff / 86400000

);

return Math.max(

0,

Math.min(

TOTAL_CHAPTERS,

passed + 1

)

);

}

/* --------------------------------------------------
            CREATE CHAPTERS
-------------------------------------------------- */

const chapterContainer =

document.getElementById(

"chapterContainer"

);

function buildChapters(){

chapterContainer.innerHTML="";

const unlocked =

getUnlockedChapter();

for(

let i=1;

i<=TOTAL_CHAPTERS;

i++

){

const card =

document.createElement("div");

card.className="chapter";

card.dataset.chapter=i;

if(i<=unlocked){

card.classList.add(

"unlocked"

);

}else{

card.classList.add(

"locked"

);

}

card.innerHTML=`

<div class="chapterNumber">

${String(i).padStart(2,"0")}

</div>

<div class="chapterTitle">

Little Chapter

</div>

`;

card.onclick=()=>{

openChapter(i);

};

chapterContainer.appendChild(card);

}

}

/* --------------------------------------------------
            OPEN CHAPTER
-------------------------------------------------- */

function openChapter(number){

const unlocked =

getUnlockedChapter();

if(number>unlocked){

speak(

"Not yet... 🤍"

);

return;

}

if(

!saveData.opened.includes(number)

){

saveData.opened.push(number);

localStorage.setItem(

STORAGE_KEY,

JSON.stringify(saveData)

);

}

showChapter(number);

}

/* --------------------------------------------------
            CHAPTER CONTENT
-------------------------------------------------- */

const chapterMessages=[

"Every beginning starts with one small step.",

"I hope today made you smile.",

"Thank you for existing.",

"You deserve every beautiful thing.",

"The stars look brighter with you.",

"I'm proud of you.",

"Drink some water today. 🤍",

"Don't forget to rest.",

"I believe in you.",

"You are deeply loved.",

"Halfway there.",

"Smile for me.",

"The moon misses you.",

"I'll always cheer for you.",

"You're doing amazing.",

"Almost there.",

"Take a deep breath.",

"You make my world softer.",

"You're enough.",

"Keep going.",

"You're my safe place.",

"Look outside tonight.",

"I hope today was kind.",

"Remember this feeling.",

"The stars are waiting.",

"You're magical.",

"Never stop dreaming.",

"You are my favorite person.",

"I'm grateful for you.",

"One more page.",

"Tomorrow will be beautiful.",

"Almost birthday.",

"I'm excited.",

"Tomorrow is the day.",

"Happy Birthday, Baboo. ❤️"

];

function showChapter(number){

speak(

chapterMessages[number-1]

);

}
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 5
                Premium Interaction Engine
========================================================== */

/* --------------------------------------------------
            SOUND READY
-------------------------------------------------- */

let audioEnabled = false;

document.addEventListener("click", () => {

if(audioEnabled) return;

audioEnabled = true;

/* Future:
new Audio("assets/audio/fireplace.mp3").play();
*/

},{once:true});

/* --------------------------------------------------
            SMOOTH FADE
-------------------------------------------------- */

function fadeOut(element,time=500){

return new Promise(resolve=>{

element.style.transition=`opacity ${time}ms ease`;

element.style.opacity="0";

setTimeout(resolve,time);

});

}

function fadeIn(element,time=500){

return new Promise(resolve=>{

element.style.display="flex";

element.style.opacity="0";

requestAnimationFrame(()=>{

element.style.transition=`opacity ${time}ms ease`;

element.style.opacity="1";

});

setTimeout(resolve,time);

});

}

/* --------------------------------------------------
            OBJECT SYSTEM
-------------------------------------------------- */

const interactables={

teddy:{
text:[
"Hehe... I was waiting for you.",
"I'll always keep you company.",
"You're finally here."
]
},

gift:{
text:[
"Not yet...",
"Patience makes birthdays magical.",
"Come back tomorrow."
]
},

cake:{
text:[
"The candles aren't lit yet.",
"Almost birthday.",
"One more day closer."
]
}

};

function chooseRandom(array){

return array[
Math.floor(
Math.random()*array.length
)
];

}

function registerInteraction(element,key){

element.addEventListener("click",()=>{

speak(

chooseRandom(

interactables[key].text

)

);

element.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.12)"

},

{

transform:"scale(1)"

}

],{

duration:350,

easing:"ease-out"

});

});

}

registerInteraction(teddy,"teddy");
registerInteraction(gift,"gift");
registerInteraction(cake,"cake");

/* --------------------------------------------------
            ROOM INTRO
-------------------------------------------------- */

async function enterRoom(){

await fadeOut(overlay,500);

overlay.style.display="none";

await fadeOut(

document.querySelector(".container"),

500

);

document.querySelector(".container").style.display="none";

await fadeIn(room,700);

room.classList.add("show");

setTimeout(()=>{

speak(

dialogue.welcome[
Math.floor(Math.random()*dialogue.welcome.length)
]

);

},900);

}

/* --------------------------------------------------
            CONTINUE BUTTON
-------------------------------------------------- */

continueButton.addEventListener("click",()=>{

enterRoom();

});

/* --------------------------------------------------
            SAVE VISIT
-------------------------------------------------- */

localStorage.setItem(

"until_last_visit",

Date.now()

);

/* --------------------------------------------------
            PAGE VISIBILITY
-------------------------------------------------- */

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

clearInterval(countdownInterval);

}else{

updateCountdown();

countdownInterval=

setInterval(

updateCountdown,

1000

);

}

}

);

/* ==================================================
            END OF PART 5
================================================== */
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 6
                Real Room Engine
========================================================== */

/* --------------------------------------------------
        ROOM STATE
-------------------------------------------------- */

const Room={

visited:false,

objects:{}

};

/* --------------------------------------------------
        OBJECT REGISTRATION
-------------------------------------------------- */

function createObject(name,element,messages){

Room.objects[name]={

element,

messages,

visited:false

};

element.addEventListener("click",()=>{

Room.objects[name].visited=true;

showDialogue(messages);

});

}

function showDialogue(messages){

const text=

messages[

Math.floor(

Math.random()*messages.length

)

];

speech.classList.remove("show");

setTimeout(()=>{

speech.innerHTML=text;

speech.classList.add("show");

},120);

}

/* --------------------------------------------------
        REGISTER OBJECTS
-------------------------------------------------- */

createObject(

"teddy",

teddy,

[

"I've been waiting here for you.",

"This room feels warmer with you here.",

"I'm your first friend inside."

]

);

createObject(

"cake",

cake,

[

"Not time for candles yet.",

"We'll celebrate together.",

"It smells delicious already."

]

);

createObject(

"gift",

gift,

[

"I know you're curious...",

"Not yet.",

"The surprise is sleeping."

]

);

/* --------------------------------------------------
        AUTO WELCOME
-------------------------------------------------- */

function welcomeSequence(){

const lines=[

"Welcome home.",

"This place belongs to both of us.",

"Everything here was made with love.",

"Let's make memories together."

];

let index=0;

showDialogue([lines[0]]);

const timer=setInterval(()=>{

index++;

if(index>=lines.length){

clearInterval(timer);

return;

}

showDialogue([lines[index]]);

},5000);

}

/* --------------------------------------------------
        ENTER ROOM
-------------------------------------------------- */

async function enterRoom(){

overlay.classList.remove("show");

await new Promise(resolve=>{

setTimeout(resolve,500);

});

document.querySelector(".container").style.display="none";

room.classList.add("show");

Room.visited=true;

welcomeSequence();

}

/* --------------------------------------------------
        CONTINUE BUTTON
-------------------------------------------------- */

continueButton.onclick=()=>{

enterRoom();

};

/* --------------------------------------------------
        SAVE
-------------------------------------------------- */

window.addEventListener("beforeunload",()=>{

localStorage.setItem(

"roomVisited",

JSON.stringify(Room.visited)

);

});

/* ==================================================
            END PART 6
================================================== */
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 7
                Atmosphere Engine Pro
========================================================== */

/* --------------------------------------------------
            SHOOTING STARS
-------------------------------------------------- */

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

document.body.appendChild(star);

const startX=Math.random()*window.innerWidth;

const startY=Math.random()*250;

star.style.left=startX+"px";

star.style.top=startY+"px";

setTimeout(()=>{

star.remove();

},1800);

}

setInterval(()=>{

if(Math.random()>0.55){

createShootingStar();

}

},9000);

/* --------------------------------------------------
            MOON PULSE
-------------------------------------------------- */

const moon=document.querySelector(".moon");

let moonDirection=1;

setInterval(()=>{

const glow=55+Math.random()*25;

moon.style.boxShadow=`

0 0 ${glow}px rgba(255,245,180,.8),

0 0 ${glow*2}px rgba(255,245,180,.35)

`;

},2200);

/* --------------------------------------------------
            FIREPLACE LIGHT
-------------------------------------------------- */

const fireplace=document.querySelector(".fireplace");

setInterval(()=>{

const brightness=0.88+Math.random()*0.22;

fireplace.style.filter=

`brightness(${brightness})`;

},180);

/* --------------------------------------------------
            TEDDY BREATHING
-------------------------------------------------- */

setInterval(()=>{

teddy.animate([

{

transform:"translateX(-50%) scale(1)"

},

{

transform:"translateX(-50%) scale(1.03)"

},

{

transform:"translateX(-50%) scale(1)"

}

],{

duration:2200,

easing:"ease-in-out"

});

},2400);

/* --------------------------------------------------
            WINDOW GLOW
-------------------------------------------------- */

const windowLight=document.querySelector(".window");

setInterval(()=>{

const value=0.94+Math.random()*0.08;

windowLight.style.filter=

`brightness(${value})`;

},1500);

/* --------------------------------------------------
            GIFT SHIMMER
-------------------------------------------------- */

setInterval(()=>{

gift.animate([

{

transform:"rotate(0deg)"

},

{

transform:"rotate(-6deg)"

},

{

transform:"rotate(6deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:900,

easing:"ease-in-out"

});

},12000);

/* --------------------------------------------------
            CAKE FLOAT
-------------------------------------------------- */

setInterval(()=>{

cake.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-7px)"

},

{

transform:"translateY(0)"

}

],{

duration:2600,

easing:"ease-in-out"

});

},2600);

/* --------------------------------------------------
            CHARACTER LOOKING AROUND
-------------------------------------------------- */

const head=document.querySelector(".head");

setInterval(()=>{

head.animate([

{

transform:"rotate(0deg)"

},

{

transform:"rotate(-3deg)"

},

{

transform:"rotate(3deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:2200,

easing:"ease-in-out"

});

},9000);

/* --------------------------------------------------
            RANDOM ROOM MOMENTS
-------------------------------------------------- */

const roomThoughts=[

"The fireplace feels warm tonight.",

"I love spending time with you.",

"Can you hear the rain?",

"The stars are beautiful.",

"I hope you're smiling.",

"This room will grow every day.",

"Tomorrow we'll have another surprise."

];

setInterval(()=>{

if(room.classList.contains("show")){

showDialogue([

roomThoughts[

Math.floor(

Math.random()*roomThoughts.length

)

]

]);

}

},45000);

/* ==================================================
                END PART 7
================================================== */
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 8
                Living World Engine
========================================================== */

/* --------------------------------------------------
            DAY PROGRESS
-------------------------------------------------- */

const DAY_ONE = new Date("2026-07-13T00:00:00");

function getProgress(){

const now = new Date();

const total = birthday - DAY_ONE;

const current = now - DAY_ONE;

let progress = current / total;

if(progress < 0) progress = 0;

if(progress > 1) progress = 1;

return progress;

}

const progress = getProgress();

/* --------------------------------------------------
            GIFT EVOLUTION
-------------------------------------------------- */

function updateGift(){

const size = 1 + (progress * .18);

gift.style.transform = `scale(${size})`;

gift.style.filter = `drop-shadow(0 0 ${10 + progress*30}px rgba(255,220,150,.55))`;

}

updateGift();

/* --------------------------------------------------
            CAKE EVOLUTION
-------------------------------------------------- */

function updateCake(){

const glow = 8 + (progress * 35);

cake.style.filter =

`drop-shadow(0 0 ${glow}px rgba(255,210,120,.65))`;

}

updateCake();

/* --------------------------------------------------
            ROOM LIGHTING
-------------------------------------------------- */

function updateRoomLighting(){

const brightness =

0.95 + progress * .12;

room.style.filter =

`brightness(${brightness})`;

}

updateRoomLighting();

/* --------------------------------------------------
            WINDOW MOONLIGHT
-------------------------------------------------- */

function moonlight(){

const value =

20 + progress * 35;

document.querySelector(".window").style.boxShadow =

`0 0 ${value}px rgba(190,220,255,.45)`;

}

moonlight();

/* --------------------------------------------------
            FLOATING DUST
-------------------------------------------------- */

function createDust(){

const dust = document.createElement("div");

dust.className = "dust";

dust.style.left =

Math.random()*window.innerWidth+"px";

dust.style.top =

window.innerHeight+"px";

document.body.appendChild(dust);

dust.animate([

{

transform:"translateY(0)",

opacity:0

},

{

opacity:.8

},

{

transform:`translateY(-${window.innerHeight+300}px)`,

opacity:0

}

],{

duration:12000 + Math.random()*5000,

easing:"linear"

});

setTimeout(()=>{

dust.remove();

},17000);

}

setInterval(createDust,800);

/* --------------------------------------------------
            WINDOW STARS
-------------------------------------------------- */

function sparkleWindow(){

windowLight.animate([

{

opacity:.8

},

{

opacity:1

},

{

opacity:.8

}

],{

duration:1800,

easing:"ease-in-out"

});

}

setInterval(sparkleWindow,3500);

/* --------------------------------------------------
            RANDOM HEARTBEAT
-------------------------------------------------- */

setInterval(()=>{

document.querySelector(".container")?.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.006)"

},

{

transform:"scale(1)"

}

],{

duration:1200,

easing:"ease-in-out"

});

},14000);

/* --------------------------------------------------
            CHARACTER LOOKS AT TEDDY
-------------------------------------------------- */

setInterval(()=>{

head.animate([

{

transform:"rotate(0deg)"

},

{

transform:"rotate(-5deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:1200,

easing:"ease-in-out"

});

},18000);

/* --------------------------------------------------
            SPECIAL MOMENTS
-------------------------------------------------- */

const specialMoments=[

"It's peaceful here...",

"Can you hear the fireplace?",

"The stars look brighter tonight.",

"I'm happy you're here.",

"Tomorrow we'll make another memory.",

"This room slowly grows with every day."

];

setInterval(()=>{

if(room.classList.contains("show")){

showDialogue([

specialMoments[

Math.floor(

Math.random()*specialMoments.length

)

]

]);

}

},60000);

/* ==================================================
                END PART 8
================================================== */
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 9
                Secret Magic System
========================================================== */

/* --------------------------------------------------
            SECRET STAR
-------------------------------------------------- */

let starClicks = 0;

moon.addEventListener("click",()=>{

starClicks++;

moon.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.08)"
},

{
transform:"scale(1)"
}

],{

duration:500,

easing:"ease-out"

});

if(starClicks===5){

showDialogue([

"You found one of my little secrets..."

]);

}

});

/* --------------------------------------------------
            SHOOTING STAR WISH
-------------------------------------------------- */

document.addEventListener("click",(event)=>{

if(event.target.classList.contains("shooting-star")){

showDialogue([

"Make a wish... ⭐"

]);

event.target.remove();

}

});

/* --------------------------------------------------
            WINDOW
-------------------------------------------------- */

windowLight.addEventListener("click",()=>{

showDialogue([

"I wonder what tomorrow will bring."

]);

});

/* --------------------------------------------------
            FIREPLACE
-------------------------------------------------- */

fireplace.addEventListener("click",()=>{

fireplace.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.02)"

},

{

transform:"scale(1)"

}

],{

duration:450

});

showDialogue([

"It's so warm here."

]);

});

/* --------------------------------------------------
            BOOKSHELF
-------------------------------------------------- */

const bookshelf=document.querySelector(".books");

bookshelf.addEventListener("click",()=>{

showDialogue([

"One day these shelves will be filled with our memories."

]);

});

/* --------------------------------------------------
            PLANT
-------------------------------------------------- */

const plant=document.querySelector(".plant");

plant.addEventListener("click",()=>{

plant.animate([

{

transform:"rotate(0deg)"

},

{

transform:"rotate(-4deg)"

},

{

transform:"rotate(4deg)"

},

{

transform:"rotate(0deg)"

}

],{

duration:900,

easing:"ease-in-out"

});

showDialogue([

"Even little things grow with love."

]);

});

/* --------------------------------------------------
            ROOM IDLE MUSIC PLACEHOLDER
-------------------------------------------------- */

let musicStarted=false;

function prepareMusic(){

if(musicStarted) return;

musicStarted=true;

/*

Future:

const music=new Audio("music/ghibli.mp3");

music.loop=true;

music.volume=.35;

music.play();

*/

}

document.addEventListener(

"click",

prepareMusic,

{

once:true

}

);

/* --------------------------------------------------
            GOOD NIGHT MODE
-------------------------------------------------- */

function nightWhisper(){

if(!room.classList.contains("show")) return;

if(Math.random()>0.6){

showDialogue([

"Thank you for visiting today. 💙"

]);

}

}

setInterval(

nightWhisper,

90000

);

/* ==================================================
            END PART 9
================================================== */
/* ==========================================================
                VERSION 5
                SCRIPT.JS
                PART 10
                Memory & Timeline Engine
========================================================== */

/* --------------------------------------------------
                SAVE SYSTEM
-------------------------------------------------- */

const SAVE_KEY = "until_your_big_day";

let save = JSON.parse(

localStorage.getItem(SAVE_KEY)

) || {

visits:0,

lastVisit:null,

giftOpened:false,

foundMoonSecret:false

};

save.visits++;

save.lastVisit = Date.now();

localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);

/* --------------------------------------------------
                FIRST VISIT
-------------------------------------------------- */

if(save.visits===1){

setTimeout(()=>{

showDialogue([

"Welcome... I'm really happy you found this place."

]);

},2500);

}

/* --------------------------------------------------
                RETURNING VISITOR
-------------------------------------------------- */

if(save.visits>1){

setTimeout(()=>{

showDialogue([

`Welcome back. This is visit #${save.visits}.`

]);

},2200);

}

/* --------------------------------------------------
                DAILY MESSAGE
-------------------------------------------------- */

const dailyThoughts=[

"Today is another beautiful day.",

"Thank you for coming back.",

"I hope today treated you kindly.",

"You're one day closer.",

"The room missed you.",

"I'm proud of you."

];

const todayKey=

new Date().toDateString();

if(

localStorage.getItem("dailyMessage")!==todayKey

){

localStorage.setItem(

"dailyMessage",

todayKey

);

setTimeout(()=>{

showDialogue([

dailyThoughts[

Math.floor(

Math.random()*dailyThoughts.length

)

]

]);

},6000);

}

/* --------------------------------------------------
                GIFT LOCK
-------------------------------------------------- */

gift.addEventListener("click",()=>{

const now=new Date();

if(now>=birthday){

if(!save.giftOpened){

save.giftOpened=true;

localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);

showDialogue([

"You finally opened it... ❤️"

]);

}else{

showDialogue([

"You've already opened your birthday gift."

]);

}

}

});

/* --------------------------------------------------
                MOON SECRET
-------------------------------------------------- */

moon.addEventListener("dblclick",()=>{

if(save.foundMoonSecret) return;

save.foundMoonSecret=true;

localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);

showDialogue([

"You found a hidden secret in the moon."

]);

moon.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:900,

easing:"ease-out"

});

});

/* --------------------------------------------------
                ROOM BREATHING
-------------------------------------------------- */

setInterval(()=>{

if(!room.classList.contains("show")) return;

room.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.002)"

},

{

transform:"scale(1)"

}

],{

duration:8000,

easing:"ease-in-out"

});

},8500);

/* --------------------------------------------------
                AUTO SAVE
-------------------------------------------------- */

setInterval(()=>{

localStorage.setItem(

SAVE_KEY,

JSON.stringify(save)

);

},30000);

/* ==================================================
                    END PART 10
================================================== */
/* ==========================================================
                STORY ENGINE
========================================================== */

const story = [

{
title:"Day 1",
text:`Welcome, Baboo.

This little world was built only for you.

Every day,
a new memory will appear.

I hope it becomes your favorite place.

💙`
},

{
title:"Day 2",
text:`Today...

I just wanted to remind you that

I'm really proud of you.

Even if nobody says it.

I always will.`
},

{
title:"Day 3",
text:`Look outside the window.

Imagine we're watching the rain together.

No phones.

No worries.

Just us.`
},

{
title:"Day 4",
text:`Today's mission:

Smile once.

That's it.

Mission complete.`
},

{
title:"Day 5",
text:`The teddy told me something.

It said...

it likes you more than me.

I think it's right.`
},

{
title:"Day 6",
text:`One more page.

One more day.

One step closer.

I'm excited already.`
};

let currentStory=0;

function unlockedStory(){

const start=new Date("2026-07-13");

const today=new Date();

start.setHours(0,0,0,0);

today.setHours(0,0,0,0);

const diff=Math.floor(

(today-start)/86400000

);

return Math.max(1,diff+1);

}
/* ==========================================================
                STORYBOOK ENGINE
                PART 1
========================================================== */

const chapters=[

{
title:"Chapter One",
date:"Day 1",
text:`Welcome, Baboo.

This little place exists because of you.

Every sunrise unlocks another memory.

Every visit leaves another smile.

I hope this becomes your favorite place.`
},

{
title:"Chapter Two",
date:"Day 2",
text:`Today's reminder.

I'm proud of you.

More than you know.

More than words can explain.`
},

{
title:"Chapter Three",
date:"Day 3",
text:`Close your eyes.

Imagine we're sitting together beside the fireplace.

Listening to the rain.

Without worrying about tomorrow.`
},

{
title:"Chapter Four",
date:"Day 4",
text:`Today's mission.

Smile.

That's all.

Mission complete.`
},

{
title:"Chapter Five",
date:"Day 5",
text:`The teddy whispered something.

It said you're its favorite visitor.

I think it's right.`
},

{
title:"Chapter Six",
date:"Day 6",
text:`We're getting closer.

One page.

One memory.

One day at a time.`
];

const STORY_START=new Date("2026-07-13T00:00:00");

function unlockedChapters(){

const today=new Date();

today.setHours(0,0,0,0);

const start=new Date(STORY_START);

start.setHours(0,0,0,0);

const diff=Math.floor(

(today-start)/86400000

);

return Math.min(

chapters.length,

Math.max(1,diff+1)

);

}

let currentChapter=1;
/* ==========================================================
                STORYBOOK ENGINE
                PART 2
========================================================== */

function nextChapter(){

const unlocked=unlockedChapters();

if(currentChapter>unlocked){

showDialogue([

"Not yet... Come back tomorrow."

]);

return;

}

const chapter=chapters[currentChapter-1];

speech.classList.remove("show");

setTimeout(()=>{

speech.innerHTML=`

<div class="chapterTitle">

${chapter.title}

</div>

<div class="chapterDate">

${chapter.date}

</div>

<br>

<div class="chapterText">

${chapter.text}

</div>

`;

speech.classList.add("show");

},200);

currentChapter++;

}

/* --------------------------------------------------
            PREVIOUS CHAPTER
-------------------------------------------------- */

function previousChapter(){

if(currentChapter<=2){

showDialogue([

"That's where our story begins."

]);

return;

}

currentChapter-=2;

nextChapter();

}

/* --------------------------------------------------
            SAVE STORY
-------------------------------------------------- */

function saveStory(){

localStorage.setItem(

"storyChapter",

currentChapter

);

}

function loadStory(){

const saved=

parseInt(

localStorage.getItem("storyChapter")

);

if(!isNaN(saved)){

currentChapter=saved;

}

}

loadStory();

/* --------------------------------------------------
            AUTO SAVE
-------------------------------------------------- */

setInterval(

saveStory,

10000

);
/* ==========================================================
                STORYBOOK ENGINE
                PART 3
========================================================== */

/* --------------------------------------------------
        TEDDY OPENS THE BOOK
-------------------------------------------------- */

teddy.replaceWith(teddy.cloneNode(true));

const storyTeddy=document.querySelector(".teddy");

storyTeddy.addEventListener("click",()=>{

nextChapter();

});

/* --------------------------------------------------
        LOCKED CHAPTERS
-------------------------------------------------- */

function chapterLocked(){

showDialogue([

"Not yet...",

"Another page will appear tomorrow.",

"I'll be waiting for you."

]);

}

/* --------------------------------------------------
        DAILY RESET
-------------------------------------------------- */

const today=new Date().toDateString();

const lastVisit=

localStorage.getItem("lastStoryVisit");

if(lastVisit!==today){

localStorage.setItem(

"lastStoryVisit",

today

);

const unlocked=unlockedChapters();

if(currentChapter>unlocked){

currentChapter=unlocked;

}

}

/* --------------------------------------------------
        CHAPTER COMPLETE
-------------------------------------------------- */

function finishChapter(){

showDialogue([

"Thank you for reading.",

"I'll have another story waiting tomorrow.",

"Sweet dreams."

]);

}

/* --------------------------------------------------
        STORY END
-------------------------------------------------- */

function endStory(){

if(currentChapter>chapters.length){

speech.innerHTML=`

<div class="chapterTitle">

To Be Continued...

</div>

<br>

<div class="chapterText">

Tomorrow,

another page will quietly appear here.

Thank you for coming back every day.

💙

</div>

`;

speech.classList.add("show");

return;

}

}

/* --------------------------------------------------
        CHECK AFTER EVERY PAGE
-------------------------------------------------- */

const originalNextChapter=nextChapter;

nextChapter=function(){

const unlocked=unlockedChapters();

if(currentChapter>unlocked){

chapterLocked();

return;

}

originalNextChapter();

saveStory();

endStory();

};

/* ==================================================
                END PART 3
================================================== */
/* ==========================================================
                STORYBOOK ENGINE
                PART 4
                REAL BOOK EFFECT
========================================================== */

/* --------------------------------------------------
        BOOK OPENING
-------------------------------------------------- */

function openBook(chapter){

speech.classList.remove("show");

setTimeout(()=>{

speech.innerHTML=`

<div class="storybook">

<div class="bookCover">

📖

</div>

<div class="bookPage">

<h2>${chapter.title}</h2>

<span>${chapter.date}</span>

<p>

${chapter.text}

</p>

<div class="pageNumber">

${currentChapter}/${chapters.length}

</div>

</div>

</div>

`;

speech.classList.add("show");

animateBook();

},250);

}

/* --------------------------------------------------
        PAGE TURN
-------------------------------------------------- */

function animateBook(){

const page=document.querySelector(".bookPage");

if(!page) return;

page.animate([

{

transform:"rotateY(-90deg)",

opacity:0

},

{

transform:"rotateY(15deg)",

opacity:.6

},

{

transform:"rotateY(0deg)",

opacity:1

}

],{

duration:900,

easing:"ease"

});

}

/* --------------------------------------------------
        NEXT PAGE
-------------------------------------------------- */

const previousFunction=nextChapter;

nextChapter=function(){

const unlocked=unlockedChapters();

if(currentChapter>unlocked){

chapterLocked();

return;

}

const chapter=chapters[currentChapter-1];

openBook(chapter);

currentChapter++;

saveStory();

};

/* --------------------------------------------------
        SMALL SPARKLE
-------------------------------------------------- */

function pageSparkle(){

const sparkle=document.createElement("div");

sparkle.className="pageSparkle";

sparkle.style.left=

Math.random()*80+10+"%";

sparkle.style.top=

Math.random()*80+10+"%";

document.body.appendChild(sparkle);

sparkle.animate([

{

opacity:0,

transform:"scale(.2)"

},

{

opacity:1,

transform:"scale(1)"

},

{

opacity:0,

transform:"scale(2)"

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

sparkle.remove();

},1800);

}

setInterval(()=>{

if(room.classList.contains("show")){

pageSparkle();

}

},4000);

/* ==================================================
                END PART 4
================================================== */
/* ==========================================================
                STORYBOOK ENGINE
                PART 5
                FULL SCREEN STORYBOOK
========================================================== */

/* --------------------------------------------------
        CREATE STORYBOOK
-------------------------------------------------- */

const book=document.createElement("div");

book.id="storybookUI";

book.innerHTML=`

<div class="bookOverlay">

<div class="bookWindow">

<div class="bookLeft">

<div class="bookTitle">

Until Your Big Day

</div>

<div class="bookmark"></div>

</div>

<div class="bookRight">

<h2 id="bookChapterTitle"></h2>

<h4 id="bookChapterDay"></h4>

<p id="bookChapterText"></p>

<div class="bookButtons">

<button id="previousPage">

Previous

</button>

<button id="nextPage">

Next

</button>

</div>

</div>

</div>

</div>

`;

document.body.appendChild(book);

/* --------------------------------------------------
        VARIABLES
-------------------------------------------------- */

const storybook=document.getElementById(

"storybookUI"

);

const titleElement=document.getElementById(

"bookChapterTitle"

);

const dayElement=document.getElementById(

"bookChapterDay"

);

const textElement=document.getElementById(

"bookChapterText"

);

const nextButton=document.getElementById(

"nextPage"

);

const previousButton=document.getElementById(

"previousPage"

);

/* --------------------------------------------------
        OPEN BOOK
-------------------------------------------------- */

function openStoryBook(){

const chapter=

chapters[currentChapter-1];

storybook.classList.add("show");

titleElement.innerHTML=

chapter.title;

dayElement.innerHTML=

chapter.date;

textElement.innerHTML=

chapter.text;

animateBook();

}

/* --------------------------------------------------
        CLOSE
-------------------------------------------------- */

storybook.addEventListener(

"click",

(event)=>{

if(

event.target===storybook

){

storybook.classList.remove(

"show"

);

}

});
/* ==========================================================
                STORYBOOK ENGINE
                PART 6
                PAGE NAVIGATION
========================================================== */

/* --------------------------------------------------
        DISPLAY CHAPTER
-------------------------------------------------- */

function renderBookPage(){

const unlocked=unlockedChapters();

if(currentChapter<1){

currentChapter=1;

}

if(currentChapter>chapters.length){

currentChapter=chapters.length;

}

const chapter=chapters[currentChapter-1];

titleElement.textContent=

chapter.title;

dayElement.textContent=

chapter.date;

textElement.textContent=

chapter.text;

document.querySelector(".bookRight").animate([

{

opacity:0,

transform:"rotateY(-8deg)"

},

{

opacity:1,

transform:"rotateY(0deg)"

}

],{

duration:650,

easing:"ease"

});

if(currentChapter===1){

previousButton.disabled=true;

}else{

previousButton.disabled=false;

}

if(currentChapter>=unlocked){

nextButton.innerHTML="Locked";

}else{

nextButton.innerHTML="Next";

}

}

/* --------------------------------------------------
        NEXT BUTTON
-------------------------------------------------- */

nextButton.addEventListener("click",()=>{

const unlocked=unlockedChapters();

if(currentChapter>=unlocked){

showDialogue([

"Not yet...",

"Tomorrow another page will appear.",

"I'll keep it safe until then."

]);

return;

}

currentChapter++;

renderBookPage();

saveStory();

});

/* --------------------------------------------------
        PREVIOUS BUTTON
-------------------------------------------------- */

previousButton.addEventListener("click",()=>{

if(currentChapter<=1){

return;

}

currentChapter--;

renderBookPage();

});

/* --------------------------------------------------
        OPEN FROM TEDDY
-------------------------------------------------- */

storyTeddy.addEventListener("click",()=>{

storybook.classList.add("show");

renderBookPage();

});

/* --------------------------------------------------
        ESC KEY
-------------------------------------------------- */

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

storybook.classList.remove("show");

}

});

/* ==================================================
                END PART 6
================================================== */
