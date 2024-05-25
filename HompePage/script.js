
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
let buttoncloselog = document.querySelector('.button-close-login');
let buttonclosereg = document.querySelector('.button-close-reg');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let searchicon = document.querySelector(".search-photo");
let shoppingicon = document.querySelector(".shoping");
let burgerlogout = document.getElementById('burgerlogout');
let translate = 'en';

buttoncloselog.addEventListener('click',function(){
    loginmenu.style= 'margin-left: -3000px !important';
  }
)
buttonclosereg.addEventListener('click',function(){
  registrmenu.style = 'margin-left: -3000px !important';
  }
)


singup.addEventListener('click', function(){
  if (window.innerWidth > 1440) {
    registrmenu.style = 'margin-left: 500px !important';
    
  }
  else{
    registrmenu.style = 'margin-left: 0px !important';
   
  }
  loginmenu.style= 'margin-left: -3000px !important';
 
})
const buttonshop = document.getElementById('shop-now-first');
buttonshop.addEventListener('click', function () {
  if(localStorage.getItem('logining') == 'true'){
    window.location = "../Shop/shopall.html";
    localStorage.setItem('currentpage','../Shop/shopall.html');
  }
  else{
    if(window.innerWidth > 1440){
      loginmenu.style = 'margin-left: 500px !important';
    }
    else{
      loginmenu.style= 'margin-left: 0px !important';
    }
    
  }

});
const buttonshopall = document.getElementById('shop-all');
buttonshopall.addEventListener('click',function(){
  
    window.location = '../Shop/shopall.html';
    localStorage.setItem('currentpage','../Shop/shopall.html');
})
const shopnow = document.querySelector('.Button-shop-now');
shopnow.addEventListener('click',function(){
  if(localStorage.getItem('logining') == 'true'){
    window.location = "../Shop/shopall.html";
    localStorage.setItem('currentpage','../Shop/shopall.html');
  }
  else{
    if(window.innerWidth > 1440){
      loginmenu.style = 'margin-left: 500px !important';
    }
    else{
      loginmenu.style= 'margin-left: 0px !important';
    }
  }
})

login.addEventListener('click', function(){
  if (window.innerWidth > 1440) {
    loginmenu.style = 'margin-left: 500px !important';
  }
  else{
    loginmenu.style= 'margin-left: 0px !important';
    
  }
  registrmenu.style = 'margin-left: -3000px !important';
})

let login_burger = document.getElementById('burgerLog');
login_burger.addEventListener('click', function(){
  registrmenu.style= 'margin-left: -3000px !important';
  loginmenu.style= 'margin-left: 0px !important';
})
let sign_burger = document.getElementById('burgerSign');
sign_burger.addEventListener('click', function(){
  loginmenu.style= 'margin-left: -3000px !important';
  registrmenu.style= 'margin-left: 0px !important';
})
let burgershop = document.querySelector('.shop');
let burgerabout = document.querySelector('.about');
let burgersustainability = document.querySelector('.sustainability');
burgerabout.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '../Read article/ReadArticle.html'
  }
})
burgershop.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '../Shop/shopall.html'
  }
})
burgersustainability.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '../Questions/Questions.html'
  }
})


const body = document.body;

const isEnLanguage = localStorage.getItem('translate');
if(isEnLanguage ==='en'){
  loadLanguage(isEnLanguage)
  const EnOption = languageSelect.querySelector('option[value="en"]');
  EnOption.selected = true;
}
else{
  loadLanguage('ru');
  const ruOption = languageSelect.querySelector('option[value="ru"]');
  ruOption.selected = true;
}
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
//Отправка авторизации
const Login = document.getElementById('log');
Login.addEventListener('click', function(){
  let logup = document.getElementById("Logup").value;
  let userpassword = document.getElementById("PasswordLog").value;
  username = logup;
  password = userpassword;
  
 let url = '../jsonfiles/LoginAndPasswods.json';
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
 login_burger.style.display = 'none';
 sign_burger.style.display = 'none';

 burgerlogout.style.display ="flex";
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
  burgerlogout.style.display ="none";
  localStorage.setItem('logining','false');
})

burgerlogout.addEventListener('click',function(){
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
  burgerlogout.style.display = "none";
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
  let url = '../jsonfiles/i18n.json';
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
  
  localStorage.setItem('translate',select);
})


function generateUsername() {
  const adjectives = ['Adventurous', 'Brave', 'Curious', 'Daring', 'Energetic', 'Friendly', 'Helpful', 'Imaginative', 'Kind', 'Optimistic',"Abacus","Candle","Eavesdrop","Gurgle","Icicle","Kaleidoscope","Marigold","Opaline","Quibble","Tangle","Vanguard","Xenial","Zephyr","Ambrosia","Daffodil","Frangipani","Gingko","Illusion"];
  const nouns = ['Sunflower', 'Raindrop', 'Firefly', 'Pebble', 'Bumblebee', 'Starfish', 'Snowflake', 'Wildflower', 'Seashell', 'Dragonfly',"Bangle","Dangle","Fascinate","Hazelnut","Jargon","Limelight","Nimble","Panacea","Ramble","Serenade","Unravel","Whimsical","Yearn","Brocade","Camellia","Effervescent","Hinterland","Juniper"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}`;
}
let count = 0

const randombutton = document.getElementById('generatelogin');
randombutton.addEventListener('click',function(){
  
  let account = document.getElementById('Logup2');
  if(count < 5){
   const username = generateUsername();
  
    account.value = username; 
    count++;
  }
  else{
    if(!checkerror){
    let errorMessge = document.createElement('p');
    errorMessge.innerText = "You cant generate more than 5 count";
    errorMessge.style = "color: red; font-size: 12px" ;
    account.insertAdjacentElement('afterend', errorMessge);
    checkerror = true;
    }
  }
  
})




//добавление нового пользователя
let ussersArray = [];
let checkerror1 = false;
let checkerror2 = false;
let checkerror3 = false;
let checkerror4 = false;
let checkerrorprivacy = false;
const sign = document.getElementById("sign");
let height = 1000;
sign.addEventListener("click", function() {
  let url = '../jsonfiles/LoginAndPasswods.json';
  const password = document.getElementById('password').value;
  const validationMessage = validatePassword(password);
  validateEmail();
  let checkboxprivacy = document.querySelector('.checkboxprivacy');
  let ussersArray = [];

  if (document.getElementById('password').value == document.getElementById('Cpassword').value) {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        ussersArray = result;
      })
      .then(() => {
        const newUser = {
          email: document.getElementById('Email').value,
          FirstName: document.getElementById('FirstName').value,
          LastName: document.getElementById('LastName').value,
          FatherName: document.getElementById('FatherName').value,
          login: document.getElementById('Logup').value,
          password: document.getElementById('password').value
        };
        ussersArray.push(newUser);
      });
  }

  if (!checkboxprivacy.checked) {
    if (!checkerrorprivacy) {
      let errorMessge = document.createElement('p');
      errorMessge.innerText = "Read Privacy policy";
      errorMessge.className = "error-message";
      document.querySelector('.Policy').insertAdjacentElement('afterend', errorMessge);
      registrmenu.style.height = `${height}px`;
      checkerrorprivacy = true;
    }
  }

  if (validationMessage) {
    alert(validationMessage);
  }

  const checkInput = (inputId, errorMsg, checkErrorVar) => {
    const input = document.getElementById(inputId);
    if (input.value === '') {
      if (!window[checkErrorVar]) {
        let errorMessge = document.createElement('p');
        errorMessge.innerText = errorMsg;
        errorMessge.className = "error-message";
        input.insertAdjacentElement('afterend', errorMessge);
        window[checkErrorVar] = true;
        registrmenu.style.height = `${height + 100}px`;
      }
    }
  };

  checkInput('Email', 'Incorrect Email', 'checkerror1');
  checkInput('FirstName', 'First name cannot be empty', 'checkerror2');
  checkInput('LastName', 'Last name cannot be empty', 'checkerror3');
  checkInput('Logup2', 'Incorrect account name', 'checkerror4');
  checkInput('password', 'Input password', 'checkerror3');
});

const inputs = ['Email', 'FirstName', 'LastName', 'Logup2', 'password'];
inputs.forEach(inputId => {
  document.getElementById(inputId).addEventListener('input', function() {
    const errorMessage = this.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.remove();
      window[`checkerror${inputs.indexOf(inputId) + 1}`] = false;
      registrmenu.style.height = `${height - 100}px`;
    }
  });
});
function validateEmail() {
  const emailInput = document.getElementById('Email');
  const email = emailInput.value.trim();

  // Проверяем, что email содержит один из допустимых доменов
  const allowedDomains = ['@gmail.com', '@mail.ru', '@yandex.ru'];
  const isValidDomain = allowedDomains.some(domain => email.endsWith(domain));

  if (!isValidDomain) {
    alert('Please enter a valid email address (e.g., @gmail.com, @mail.ru, @yandex.ru)');
  }
}
function validatePassword(password) {
  // Проверяем длину пароля
  if (password.length < 8) {
    return "Пароль должен содержать не менее 8 символов";
  }

  // Проверяем наличие специальных символов
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Пароль должен содержать не менее одного специального символа";
  }

  // Проверяем наличие заглавных букв
  if (!/[A-Z]/.test(password)) {
    return "Пароль должен содержать не менее одной заглавной буквы";
  }

  // Проверяем наличие английских букв
  if (!/[a-zA-Z]/.test(password)) {
    return "Пароль должен содержать только английские буквы";
  }

  // Если все проверки пройдены, пароль считается валидным
  return null;
}

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
    window.location.href = '../Shop/shopall.html'
  }
})
aboutheader.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '../Read article/ReadArticle.html'
  }
})
sustainabilityheader.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '../Questions/Questions.html'
  }
})

let sust = document.querySelector('.openquest')
sust.addEventListener('click', function(){
  window.location = '../Questions/Questions.html';
})

