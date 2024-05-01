let buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let text = document.querySelectorAll('p');
let header = document.querySelector('header');
let logo = document.getElementById('logo');
let singup = document.getElementById('Sign-up');
let login = document.getElementById('Log-in');

let username = '';
let password = '';


buttonswitch.addEventListener('click',function(){
    if(buttonswitch.checked){
       
        document.body.classList.add("night-theme");
        header.classList.add("night-theme");
        
         logo.style.content = "url(./images/logowhite.png)";
         singup.style.color = "#50FFB1";
         singup.style.backgroundColor = "#310A31";
         login.style.color = "#50FFB1";
         login.style.backgroundColor = "#310A31";
         for (let elem of text) {
             
            elem.classList.add("night-text");
         }
        
        for(let i = 0; i < box.length; i++){
             box[i].classList.add("night-theme");
        }
        
     }else {
         document.body.classList.remove("night-theme");
         header.classList.remove("night-theme");
         logo.style.content = "url(./images/logo.svg)";
         singup.style.color = "#000000";
         singup.style.backgroundColor = "#FCF8F3";
         login.style.color = "#000000";
         login.style.backgroundColor = "#FCF8F3";
      
         for(let elem of box){
             elem.classList.remove("night-theme");
         }
         for (let elem of text) {
             elem.classList.remove("night-text");
         }
         
     }
});

let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".slider-images");
const slideWidth = slider.clientWidth;
let currentPosition = 0;

arrowright.addEventListener('click',function(){

    if (currentPosition === -(slideWidth * (slider.childElementCount - 1))) {
        currentPosition = 0;
      } else {
        currentPosition -= slideWidth;
      }
      slider.style.transform = `translateX(${currentPosition}px)`;
}

)
arrowleft.addEventListener('click',function(){

if (currentPosition === 0) {
    currentPosition = -(slideWidth * (slider.childElementCount - 1));
  } else {
    currentPosition += slideWidth;
  }
  slider.style.transform = `translateX(${currentPosition}px)`;
}
)

const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
burger_menu_toogle.addEventListener('click', function(){
  if(burger_menu_toogle.checked){
    burger_menu.display = "flex";
  }
  else{
    burger_menu.display = "none";
  }
})
