var a = 1; // cislo
var a = "ahoj"; //retezec
var a = true; // boolean
var a = [1,2,3,4]; // pole
var a = {a: 1, b: 2, c: 3}; // object
var a = null; // prazdny
var b;
console.log(a);
console.log(b); // undefined
console.log(typeof(a)); // vypsání typu
// porovnání
console.log(b == a); // to samé? poravnává hodnotu
console.log(b === a); // porovnává typ i hodnotu
// konverze
var d = Number("12 veverek"); // NAN
var d = Number("12"); // konverze
var d = Boolean("true");
var d = String(11);
console.log(d);
console.log(window.d);
// console.log(window);
let e = 12;
console.log(e);
console.log(window.e);
f = 0;
console.log(f);
console.log(window.f);
// -- jazykove konstrukce
if (e == 12) {
    console.log("Dvanact");
} else {
    console.log("nedvanact");
}
/*
if (e == 12)
{
}
*/
switch(e) {
    case 11: console.log("jedenact"); break;
    case 12: console.log("dvanact"); break;
    default: console.log("neco jineho");
}
let g = 0;
while (g < 10) {
    console.log(g++);
}
do {
    console.log(g--);
} while(g > 0);