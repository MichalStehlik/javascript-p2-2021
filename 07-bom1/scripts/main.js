// window.history.back();
// window.history.forward();
// console.log(window.history);
// history.go(-3);

// window.location.href = "http://web.pslib.cz";
console.log(location.href); // stránka
console.log(location.host); // server
console.log(location.port); // port
console.log(location.protocol); // protokol
console.log(location.pathname); // cesta

let params = new URLSearchParams(window.location.search); // parametry URL
if (params.has("a")) console.log(params.get("a"));

console.log(navigator);
console.log(navigator.userAgent);
//if(navigator.userAgent.indexOf("Chrome") != -1) alert("Jsem Chrome");
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.userAgentData);
//console.log(navigator.geolocation.getCurrentPosition(1));