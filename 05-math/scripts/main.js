let a = 14;
let b = 8.25;
let c = 8.78;
let d = -8.78;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a / 0);
console.log(a % b);

console.log(Infinity + 3);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.round(b));
console.log(Math.round(c));
console.log(Math.round(d));
console.log(Math.ceil(b));
console.log(Math.ceil(c));
console.log(Math.ceil(d));
console.log(Math.floor(b));
console.log(Math.floor(c));
console.log(Math.floor(d));
console.log(Math.trunc(b));
console.log(Math.trunc(c));
console.log(Math.trunc(d));
console.log(c - Math.trunc(c));

console.log(Math.pow(5,2));
console.log(Math.pow(25,0.5));
console.log(Math.sqrt(25));
console.log(Math.log(10));
console.log(Math.log2(8));
console.log(Math.log10(100));
console.log(Math.sign(-5));
console.log(Math.abs(-5));
console.log(Math.sin(Math.PI)); // sin, cos, tan, asin, acos, atan
console.log(Math.max(1,2,8,4,5,9,2,3));
console.log(Math.min(1,2,8,4,5,9,2,3));
console.log(Math.sin(90 * Math.PI / 180));

console.log(Math.random()); // <0,1)
console.log(Math.floor(Math.random() * 6) + 1); // kostka

console.log(.2 + .1 === .3);