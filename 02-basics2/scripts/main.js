/*
for(let i = 0; i < 10; i++)
{
    console.log(i);
}
*/
let pole = [0, 1, "Alois", true, 1.5, 14];
/*
for(let i = 0; i < pole.length; i++)
{
    console.log(pole[i]);
}
*/
/*
for (x of pole)
{
    console.log(x);
}
*/
/*
let o = {a: 1, b: 4, q: 11};
for(x in o) {
    console.log(x,o[x]);
}
*/
/*
function metoda1(param) {
    return param
}
console.log(metoda1(6));
*/
/*
const metoda2 = function(param) {
    return param
}
console.log(metoda2(11))
*/
/*
const metoda3 = (param) => {
    return param
}
console.log(metoda3(17))
*/
/*
const a = 6
a = 11
console.log(a)
*/
/*
const p = [1,2,3]
p[2] = 11
p.push(4)
console.log(p)
*/
pole = [1,2,3,4,5]
pole.push(6)
pole.forEach((item) => {console.log(item)})
console.log(pole)
let pole2 = pole.map((item)=>{return item * 2})
console.log(pole2)