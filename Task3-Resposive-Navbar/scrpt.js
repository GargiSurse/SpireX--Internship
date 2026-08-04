//==============================
//SELECT ELEMENTS
//==============================
const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const menuIcon=menuBtn.querySelector("i");
const links=document.querySelectorAll(".nav-links a");
const header=document.querySelector(".header");

//==============================
//MOBILE MENU
//==============================
menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){
menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");
}else{
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");
}

});

//==============================
//CLOSE MENU AFTER CLICK
//==============================
links.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");
menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

});

});

//==============================
//ACTIVE LINK
//==============================
links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>item.classList.remove("active"));
link.classList.add("active");

});

});

//==============================
//NAVBAR SCROLL EFFECT
//==============================
window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.top="12px";

document.querySelector(".navbar").style.background="rgba(10,10,10,.75)";
document.querySelector(".navbar").style.boxShadow="0 12px 35px rgba(212,175,55,.18)";

}else{

header.style.top="20px";

document.querySelector(".navbar").style.background="rgba(20,20,20,.45)";
document.querySelector(".navbar").style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

}

});

//==============================
//HERO BUTTON ANIMATION
//==============================
const heroBtn=document.querySelector(".hero-btn");

heroBtn.addEventListener("mouseenter",()=>{

heroBtn.style.transform="translateY(-5px) scale(1.04)";

});

heroBtn.addEventListener("mouseleave",()=>{

heroBtn.style.transform="translateY(0) scale(1)";

});