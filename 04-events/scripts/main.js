
/*function handleClick(event) {
    console.log(event);
    alert("AAAAA");
}

let p1 = document.getElementById("par1");
let p2 = document.getElementById("par2");
p1.onclick = handleClick;
//p1.onclick = handleClick();
p2.addEventListener('click', handleClick);
p2.addEventListener('click', e => {alert("BBBBB")});
p2.addEventListener('click', e => {handleClick(e)});
*/

//window.addEventListener("load", e => {console.log("LOAD")});
//document.addEventListener("DOMContentLoaded", e => {console.log("CONTENTLOAD")});

function handleClick(event) {
    alert(event.target.id);
}

document.addEventListener("DOMContentLoaded", e => {
    let p1 = document.getElementById("par1");
    let p2 = document.getElementById("par2");
    p1.addEventListener("click",e => {
        alert("Odstavec 1");
    });
    p2.addEventListener("click",e => {
        alert("Odstavec 2");
    });
    p1.addEventListener("click",handleClick);
    p2.addEventListener("click",handleClick);
});

// https://developer.mozilla.org/en-US/docs/Web/Events
/*
click
load
DOMContentLoaded
focus
blur
keydown
keypress
keyup
mousedown
mouseup
mouseenter
mouseleave
mousemove
*/