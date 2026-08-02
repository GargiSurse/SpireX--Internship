/*=========================
TYPING EFFECT
=========================*/

const text = "Frontend Developer";
const heading = document.querySelector(".intro h3");

let index = 0;

function typeEffect(){
    if(index < text.length){
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect,120);
    }
}

heading.textContent = "";
typeEffect();



/*=========================
EMAIL BUTTON
=========================*/

const emailCard = document.querySelector(".social-grid a:nth-child(3)");

emailCard.addEventListener("click", function(e){

    e.preventDefault();

    window.location.href = 
    "mailto:gargisurse@gmail.com?subject=Portfolio Contact&body=Hello Gargi, I found your portfolio.";

});



/*=========================
CARD REVEAL ANIMATION
=========================*/

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold:0.2
});


cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="0.6s ease";

    observer.observe(card);

});



/*=========================
WELCOME MESSAGE
=========================*/

console.log(
"Welcome to Gargi's Portfolio 🚀"
);