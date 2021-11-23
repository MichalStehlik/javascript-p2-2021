console.log(window.document.children[0].children);
let elA = document.getElementById("a");
console.log(elA);
console.log(elA.children);
console.log(elA.parentElement);
let elLI = document.getElementsByTagName("li");
console.log(elLI);
let elImps = document.getElementsByClassName("imp");
console.log(elImps);
let elX = document.querySelectorAll("li.imp");
console.log(elX);
//
console.log(elA.title);
elA.title = "WWW";
elA.setAttribute("style","color: red");
elA.style.fontStyle = "italic";
console.log(elA.style);
console.log(window.getComputedStyle(elA));
elA.classList.add("medved");
elA.classList.remove("medved");
elA.classList.toggle("medved");
// 
console.log(elA.innerText);
console.log(elA.innerHTML);
console.log(document.innerText);
console.log(document.innerHTML);
//
document.write("Ahoj");