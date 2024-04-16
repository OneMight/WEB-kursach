const buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let text = document.getElementsByTagName('p');
let header = document.querySelector('header');
let logo = document.getElementById('logo');
let singup = document.getElementById('Sign-up');
let login = document.getElementById('Log-in');

let username;
let password;

function backgroundswitch(){
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
        if(i%2 != 0){
            box[i].classList.add("night-theme-second");
        }
        else{
            box[i].classList.add("night-theme");
        }
        
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
}

