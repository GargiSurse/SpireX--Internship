// =============================
// THEME TOGGLE
// =============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.className="fa-solid fa-sun";

    }else{

        icon.className="fa-solid fa-moon";

    }

});

// =============================
// LIVE CLOCK
// =============================

const time=document.getElementById("time");

function updateTime(){

    const now=new Date();

    time.textContent=now.toLocaleTimeString();

}

updateTime();

setInterval(updateTime,1000);

// =============================
// CHART 1
// =============================

const wasteChart=new Chart(

document.getElementById("wasteChart"),

{

type:"doughnut",

data:{

labels:["Empty","Half","Full"],

datasets:[{

data:[8,10,6],

backgroundColor:[

"#22C55E",

"#FACC15",

"#EF4444"

],

borderWidth:0

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom"

}

}

}

}

// =============================
// CHART 2
// =============================

);

const collectionChart=new Chart(

document.getElementById("collectionChart"),

{

type:"bar",

data:{

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[{

label:"Collected",

data:[12,16,10,18,14],

backgroundColor:"#60A5FA",

borderRadius:8

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

},

scales:{

y:{

beginAtZero:true

}

}

}

}

);
const truck=document.getElementById("truckStatus");

const truckData=[

"🚛 Collecting Waste",

"📍 Reached Sector A",

"♻ Returning to Station",

"🛠 Maintenance Check"

];

setInterval(()=>{

truck.textContent=
truckData[Math.floor(Math.random()*truckData.length)];

},5000);
const hour=new Date().getHours();

const greet=document.getElementById("greeting");

if(hour<12){

greet.textContent="🌞 Good Morning";

}

else if(hour<18){

greet.textContent="☀ Good Afternoon";

}

else{

greet.textContent="🌙 Good Evening";

}
const truckStatus=document.getElementById("truckStatus");

const trucks=[

"🚛 Collecting Waste",

"📍 Sector A",

"♻ Returning to Station",

"🛠 Maintenance",

"⛽ Refueling"

];

setInterval(()=>{

truckStatus.textContent=
trucks[Math.floor(Math.random()*trucks.length)];

},5000);
const recommendation=document.getElementById("recommendation");

const tips=[

"Collect Bin 04 first.",

"Increase recycling pickup.",

"Sector B is operating normally.",

"Overflow risk detected.",

"Collection schedule is on time."

];

setInterval(()=>{

recommendation.textContent=
tips[Math.floor(Math.random()*tips.length)];

},4000);
let carbon=150;

setInterval(()=>{

carbon+=2;

document.getElementById("carbon").textContent=
carbon+" kg";

},3000);
setInterval(()=>{

document.getElementById("collected").textContent=
Math.floor(Math.random()*10)+15;

document.getElementById("recycle").textContent=
(Math.floor(Math.random()*20)+70)+"%";

document.getElementById("fullBins").textContent=
Math.floor(Math.random()*5);

},5000);