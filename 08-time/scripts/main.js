let date = new Date();
console.log(date);
console.log(date.getHours());
console.log(date.getUTCHours());
let date2 = Date.parse("1.3.2022");
let date3 = new Date("1.3.2022");
console.log(date3);

let t1 = setTimeout(() => {alert("Budicek")}, 2000);
//clearTimeout(t1);

let i1 = setInterval(() => {console.log(new Date())},1000);
//clearInterval(i1);