const handleClick = (e) => {
    e.preventDefault(); // zabrání provedení standardní obsluhy události
    console.log(this);
    console.log(e);
    console.log(e.target);
    let txt = e.target.dataset.text;
    alert(txt);
}

const init = () => {
    let linkElement1 = document.getElementById("l1");
    linkElement1.addEventListener("click", handleClick);
    let linkElement2 = document.getElementById("l2");
    linkElement2.addEventListener("click", handleClick);
}

/*
const handleClick = (e,txt) => {
    e.preventDefault(); // zabrání provedení standardní obsluhy události
    console.log(this);
    console.log(e);
    console.log(e.target);
    //let txt = e.target.innerText;
    alert(txt);
}

const init = () => {
    let linkElement1 = document.getElementById("l1");
    linkElement1.addEventListener("click", e => handleClick(e, "Someone clicked on me (1)."));
    let linkElement2 = document.getElementById("l2");
    linkElement2.addEventListener("click", handleClick);
}
*/

document.addEventListener("DOMContentLoaded", init);

// eval()
// Function