

const decreasebut = document.getElementById("de");
const resetbut = document.getElementById("re");
const increasebut = document.getElementById("in");

const display = document.getElementById("display");

let count = 0;

decreasebut.onclick = function(){
    count--;
    display.textContent = count;
}
resetbut.onclick = function(){
    count = 0;
    display.textContent = count;
}
increasebut.onclick = function(){
    count++;
    display.textContent = count;
}