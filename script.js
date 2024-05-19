
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
let logut = document.getElementById('logout');
let logining = false;
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let searchicon = document.querySelector(".search-photo");
let shoppingicon = document.querySelector(".shoping");


singup.addEventListener('click', function(){
  registrmenu.style.transform = 'translateX(-2850px)';
  loginmenu.style.transform = 'translateX(-2150px)';
})
const buttonshop = document.getElementById('shop-now-first');
buttonshop.addEventListener('click', function () {
  if(localStorage.getItem('logining') == true){
    window.location = "shopall.html";
    localStorage.setItem('currentpage','shopall.html');
  }
  else{
    loginmenu.style.transform = 'translateX(2150px)';
  }

});
const buttonshopall = document.getElementById('shop-all');
buttonshopall.addEventListener('click',function(){
  
    window.location = 'shopall.html';
    localStorage.setItem('currentpage','shopall.html');
})
const shopnow = document.querySelector('.Button-shop-now');
shopnow.addEventListener('click',function(){
  if(localStorage.getItem('logining') == true){
    window.location = "shopall.html";
    localStorage.setItem('currentpage','shopall.html');
  }
  else{
    loginmenu.style.transform = 'translateX(2150px)';
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


const body = document.body;

// Проверяем, есть ли сохраненное значение в локальном хранилище
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
let searchphoto = document.querySelector('.search-photo');
let basket = document.querySelector('shoping');
// Устанавливаем начальное значение в соответствии с сохраненным значением
if (isDarkThemeEnabled) {
  switchdarktheme();
  buttonswitch.checked = true;
  
}
function switchdarktheme(){
  document.body.classList.add("night-theme");
  header.classList.add("night-theme"); 
  searchicon.style.filter = "invert(1)";
  shoppingicon.style.filter = "invert(1)";
 logo.style = "filter: invert(1)";
 singup.style.color = "#50FFB1";
 singup.style.backgroundColor = "#310A31";
 login.style.color = "#50FFB1";
 login.style.backgroundColor = "#310A31";


 for (let elem of text) {
     
    elem.classList.add("night-text");
 }
 logut.style.backgroundColor = "#310A31";
 logut.style.color = "#50FFB1";
for(let i = 0; i < box.length; i++){
     box[i].classList.add("night-theme");
}
if (burger_menu_toogle.checked == true){
  burger_menu.classList.add("night-theme");
}
}
function switchlight(){
  document.body.classList.remove("night-theme");
  header.classList.remove("night-theme");
  searchicon.style.filter = "invert(0)";
  shoppingicon.style.filter = "invert(0)";
  logo.style = "filter: invert(0)";
  singup.style.color = "#000000";
  singup.style.backgroundColor = "#FCF8F3";
  login.style.color = "#000000";
  login.style.backgroundColor = "#FCF8F3";
  logut.style.color = "#000000";
  logut.style.backgroundColor = "#FCF8F3";

  for(let elem of box){
      elem.classList.remove("night-theme");
  }
  for (let elem of text) {
      elem.classList.remove("night-text");
  }
  if (burger_menu_toogle.checked == true){
    burger_menu.classList.remove("night-theme");
  }
}
buttonswitch.addEventListener('change',function(){
    if(buttonswitch.checked){  
      localStorage.setItem('darkThemeEnabled','true') 
      switchdarktheme();
        }
     else {
      switchlight();
         localStorage.setItem('darkThemeEnabled','false')
     }
});

let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".slider-images");

let slideWidth;
let i = 0;
function updateCountOfItems() {
  if (window.innerWidth <= 1200) {
    slideWidth = 8;
  }
  else {
    slideWidth = 7;
  }
  if(window.innerWidth <= 768){
    slideWidth = 9;
  }
  if(window.innerWidth <=320){
    slideWidth = 10;
  }
  
}

updateCountOfItems();

window.addEventListener('resize', updateCountOfItems);
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


burger_menu_toogle.addEventListener('click', function(){
  if(burger_menu_toogle.checked){
    burger_menu.display = "flex";
  }
  else{
    burger_menu.display = "none";
  }
})
let checkusers = document.getElementById('checkusers');
let pUsername = document.querySelectorAll('.username');
let checkuser = localStorage.getItem('logining') === 'true';
if(checkuser && username !='Admin'){
  setLoginNameOnSite();
  let unauthotized = document.querySelectorAll(".unauthotized");
    for(let elements of unauthotized){
      elements.style = "display:flex"
    }
}
else{
  if(username == "Admin"){
    setLoginNameOnSite();
    let admindives = document.querySelectorAll('.admin');
    for(let elem of admindives){
    elem.style.display = "none";
    }
    checkusers.style.display ="flex";
  }
}
//Отправка формы регистрации
const Login = document.getElementById('log');
Login.addEventListener('click', function(){
  let logup = document.getElementById("Logup").value;
  let userpassword = document.getElementById("PasswordLog").value;
  username = logup;
  password = userpassword;
  
 let url = 'LoginAndPasswods.json';
 fetch(url)
 .then(response => response.json())
 .then(result => { for(let element of result){
  if(element.login == username && element.password == password){
    logining = true;
    localStorage.setItem('username',`${username}`);
    localStorage.setItem('password',`${password}`);
    localStorage.setItem('logining','true');
    setLoginNameOnSite();
    checkerror = false;
    if(username == 'Admin'){
      let admindives = document.querySelectorAll('.admin');
      for(let elem of admindives){
      elem.style.display = "none";
      checkusers.style.display = "flex";
    }
    }
    else{
      let unauthotized = document.querySelectorAll(".unauthotized");
      for(let elements of unauthotized){
        elements.style = "display:flex"
      }
    }
    
  }
 
 }
  if(!logining){

    addredblocks();
  }
});
 }
);

function setLoginNameOnSite(){
 for(let elem of pUsername){
  elem.textContent = localStorage.getItem('username');
  elem.style.display = "block";
 
 }
 logut.style = "display: flex";
 loginmenu.style = 'transform: translateX(-2150px)';
 singup.style.display = 'none';
 login.style.display = "none";
}
//выход из аккаунта
logut.addEventListener('click',function(){
  username = '';
  password = '';
  //убираем значения юзера с локалки
  localStorage.setItem('username',`${username}`);
  localStorage.setItem('password',`${password}`);
  singup.style.display = 'flex';
  login.style.display = "flex";
  for(let elem of pUsername){
    elem.style.display = "none";
  }
  checkusers.style.display = "none";
  logut.style.display = "none";
  localStorage.setItem('logining','false');
})
let checkerror = false
function addredblocks(){
  if(!checkerror){
    let errorMessge = document.createElement('p');
    errorMessge.innerText = "Incorrect login";
    errorMessge.style = "color: red; font-size: 12px" ;
    let errorpassword = document.createElement('p');
    errorpassword.innerText = "Incorrect password";
    errorpassword.style = "color: red; font-size: 12px";
    let logup = document.getElementById("Logup");
    let userpassword = document.getElementById("PasswordLog");
    logup.insertAdjacentElement('afterend', errorMessge);
    userpassword.insertAdjacentElement('afterend', errorpassword);
    checkerror = true;
  }
}
function loadLanguage(language) {
  let url = 'i18n.json';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Обновление текстовых значений элементов
      const elements = document.querySelectorAll('.i18n');
  
      for (let element of elements) {
        
        const key = element.getAttribute('i18n');
        let translation = data[language][key];
        localStorage.setItem(key,translation);
        element.innerHTML = translation;
      }
    });
}
const languageselect = document.getElementById('languageSelect');
languageselect.addEventListener('change', function(){
  let select = languageselect.value;
  loadLanguage(select)
})




//добавление нового пользователя
let ussersArray = [];

const sign = document.getElementById("sign");
sign.addEventListener("click", function(){
  let url = 'i18n.json';
  if(document.getElementById('password').value == document.getElementById('Cpassword').value){
    fetch(url)
    .then(response => response.json())
    .then(result =>{
     ussersArray = result;
    })
    const newUser = {
      email : document.getElementById('Email').value,
      FirstName : document.getElementById('FirstName').value,
      LastName : document.getElementById('LastName').value,
      FatherName : document.getElementById('FatherName').value,
      login : document.getElementById('Logup').value,
      password : document.getElementById('password').value
    }
    ussersArray.push(newUser);
  }
})

let shopheader = document.getElementById('shop');
let aboutheader = document.getElementById('about');
let sustainabilityheader = document.getElementById('sustainability');

shopheader.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = 'shopall.html'
  }
})
aboutheader.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = 'ReadArticle.html'
  }
})
sustainabilityheader.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = 'Questions.html'
  }
})