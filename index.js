// Write your code here!
var el = document.querySelector('main#main');
el.remove();

let element = document.createElement('h1');
element.setAttribute("id", "victory");
document.body.appendChild(element); 
let newHeader = document.querySelector("h1#victory");
newHeader.innerHTML = "Ricky is the champion";

