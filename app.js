// FIRST DIV
const headerCont = document.getElementsByClassName('header-container');
const navCont = document.getElementsByClassName('nav-container');
const textHeader = document.getElementById('text-header');
// SECOND DEV
const bodyCont = document.getElementsByClassName('body-container');
const textContent = document.getElementById('text-content');
const inputContent = document.getElementById('input-content');
const button = document.getElementById('btn');
// THRID DEV
const resultCont = document.getElementsByClassName('result-container');
const text2 = document.getElementById('text-2');
// FOURTH DEV
const footerCont = document.getElementsByClassName('footer-container');
const highlow = document.getElementById('high-low');


let randomNum = Math.floor(Math.random() * 15) + 1
console.log(randomNum);

button.addEventListener("click", () => {
    if (Number(inputContent.value) === randomNum) {
        text2.textContent = `You are win! Number is: ${inputContent.value}`
        highlow.textContent = ""
    } else if (inputContent.value > 15) {
        highlow.textContent = `Please enter from 1 until 15 numbers`
    } else if (inputContent.value > randomNum){
        text2.textContent = `Your is too high`
        highlow.textContent = ""
    }else{
        text2.textContent = `Your is to low :(`
        highlow.textContent = ""
    }
})