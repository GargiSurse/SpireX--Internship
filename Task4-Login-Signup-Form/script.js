/*=========================
GET ELEMENTS
=========================*/
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const message = document.getElementById("message");

/*=========================
SWITCH TO LOGIN
=========================*/
loginBtn.addEventListener("click", function () {

loginBtn.classList.add("active");
signupBtn.classList.remove("active");

loginForm.classList.remove("hide");
signupForm.classList.add("hide");

message.innerHTML = "";

});

/*=========================
SWITCH TO SIGNUP
=========================*/
signupBtn.addEventListener("click", function () {

signupBtn.classList.add("active");
loginBtn.classList.remove("active");

signupForm.classList.remove("hide");
loginForm.classList.add("hide");

message.innerHTML = "";

});

/*=========================
EMAIL VALIDATION
=========================*/
function validEmail(email){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);

}

/*=========================
LOGIN VALIDATION
=========================*/
loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value.trim();

if(email==="" || password===""){

message.style.color="red";
message.innerHTML="Please fill all fields.";

return;

}

if(!validEmail(email)){

message.style.color="red";
message.innerHTML="Enter a valid email.";

return;

}

if(password.length<6){

message.style.color="red";
message.innerHTML="Password must be at least 6 characters.";

return;

}

message.style.color="green";
message.innerHTML="Login Successful ✅";

loginForm.reset();

});

/*=========================
SIGNUP VALIDATION
=========================*/
signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value.trim();

const confirmPassword=document.getElementById("confirmPassword").value.trim();

if(name==="" || email==="" || password==="" || confirmPassword===""){

message.style.color="red";
message.innerHTML="Please fill all fields.";

return;

}

if(name.length<3){

message.style.color="red";
message.innerHTML="Name should contain at least 3 characters.";

return;

}

if(!validEmail(email)){

message.style.color="red";
message.innerHTML="Enter a valid email.";

return;

}

if(password.length<6){

message.style.color="red";
message.innerHTML="Password should contain at least 6 characters.";

return;

}

if(password!==confirmPassword){

message.style.color="red";
message.innerHTML="Passwords do not match.";

return;

}

message.style.color="green";
message.innerHTML="Account Created Successfully 🎉";

signupForm.reset();

});