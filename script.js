let buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let text = document.querySelectorAll('p');
let header = document.querySelector('header');
let logo = document.getElementById('logo');
let singup = document.getElementById('Sign-up');
let login = document.getElementById('Log-in');
let main = document.querySelector('main');
let loginmenu = document.querySelector('.Login');
let registrmenu = document.querySelector('.Register');

let username = '';
let password = '';

singup.addEventListener('click', function(){
  registrmenu.style.transform = 'translateX(-2850px)';
  loginmenu.style.transform = 'translateX(-2150px)';
})
const buttonshop = document.getElementById('shop-now-first');
buttonshop.addEventListener('click', function () {
  if (username === '' || username !== 'admin') {
    loginmenu.style.transform = 'translateX(2150px)';
    
  } else {
    window.location = 'shopall.html';
  }
});
const buttonshopall = document.getElementById('shop-all');
buttonshopall.addEventListener('click',function(){
  if(username === '' && username !='admin'){
    loginmenu.style = 'transform: translateX(2150px)';
  
  }
  else{
    window.location = 'shopall.html';
  }
})
const shopnow = document.querySelector('.Button-shop-now');
shopnow.addEventListener('click',function(){
  if(username === '' && username !='admin'){
    loginmenu.style = 'transform: translateX(2150px)';
   
    
  }
  else{
    window.location = 'shopall.html';
  }
})

login.addEventListener('click', function(){
  loginmenu.style = 'transform: translateX(2150px)';
  registrmenu.style.transform = 'translateX(2850px)';
  
})

let login_burger = document.getElementById('burgerLog');
login_burger.addEventListener('click', function(){
  loginmenu.style = 'transform: translateX(2300px)';

  
})
//При нажатии на кнопеку логин выскакивает модальное окно что ты лох попущенный
buttonswitch.addEventListener('click',function(){
    if(buttonswitch.checked){
       
        document.body.classList.add("night-theme");
        header.classList.add("night-theme");
        arrowleft.style = "filter: invert(1)";
        arrowright.style = "filter: invert(1)";
         logo.style = "filter: invert(1)";
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
         arrowleft.style = "filter: invert(0)";
        arrowright.style = "filter: invert(0)";
         logo.style = "filter: invert(0)";
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
const slideWidth = 9;
let currentPosition = 0;
let i = 0;
arrowright.addEventListener('click',function(){

    if(i < slideWidth - 1){
      i++
    }
    else{
      i = 0
    }
    slider.style.transform = `translateX(-${i*328}px)`;
}

)
arrowleft.addEventListener('click',function(){

  if(i > 0){
    i--;
  }
  else{
    i = slideWidth -1;
  }
  slider.style.transform = `translateX(-${i*328}px)`;
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

//Отправка формы регистрации
const Login = document.getElementById('log');
Login.addEventListener('click', function(){
  let logup = document.getElementById("Logup").value;
  let userpassword = document.getElementById("PasswordLog").value;
  username = logup;
  password = userpassword
  let logining = false;
 let url = 'LoginAndPasswods.json';
 fetch(url)
 .then(response => response.json())
 .then(result => { for(let element of result){
  if(element.login == username && element.password == password){
    logining = true;
    setLoginNameOnSite(username);
    
  }
  if(!logining){
    alert('Неправильный логин или пароль');
  }
 }});
 }
);
let logut = document.getElementById('logout');
let pUsername = document.querySelector('.username');
function setLoginNameOnSite(username){
 
  pUsername.textContent = username;
  pUsername.style.display = "block";
  logut.style = "display: flex";
  loginmenu.style = 'transform: translateX(-2150px)';
  singup.style.display = 'none';
  login.style.display = "none";
}
logut.addEventListener('click',function(){
  location.reload();
  username = '';
  password = '';
  singup.style.display = 'flex';
  login.style.display = "flex";
  pUsername.style.display = "none";
  logut.style = "display: none";
})