const buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let text = document.getElementsByTagName('p');
let header = document.querySelector('header');
let username;
let password;

function backgroundswitch(){
    if(buttonswitch.checked){
        document.body.style.backgroundColor = '#011242';
        header.style.backgroundColor = '#011242';
        for (let elem of text) {
            elem.style.color = "#ffffff";
        }
        for(let elem of box){
            elem.style.backgroundColor = "#011242";
        }
    } else {
        header.style.backgroundColor = '#FCF8F3';
        document.body.style.backgroundColor = "";
        for(let elem of box){
            elem.style.backgroundColor = "";
        }
        for (let elem of text) {
            elem.style.color = ""; 
        }
    }
}

