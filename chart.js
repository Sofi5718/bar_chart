"use strict"

window.addEventListener("load", start);

const kø = []

function start() {
    setInterval(tæl, 1000)
}

function getNumberOfCustomers() {
    return Math.floor(Math.random() * 32);
}
 
function tæl() {
    if (kø.length == 40) {
        kø.shift()
    }
    kø.push(getNumberOfCustomers())
    displayBar();
    console.log(kø);
}

function displayBar() {
    for (let i = 0; i < kø.length; i++){
        const size = kø[i];
        const bar = document.querySelectorAll(".bar")[i];
        bar.style.height = size+"vh"
    }

}