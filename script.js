


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

var sign_up=document.querySelector(".sign-up");
var login=document.querySelector(".login");


sign_in_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_up_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



const email=document.getElementsByClassName("email-inp");
 const password=document.getElementsByClassName("pswd");
var login=document.getElementById("signin_btn")
const anchor=document.querySelector('.anchor')
 


login.addEventListener('click',function()
{
  if(email.value>5&&password.value>5){
    anchor.setAttribute('href','home.html');
    anchor.click();
  }else[
    alert("please fill the fields")
  ]


})

  
