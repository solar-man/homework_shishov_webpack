import {
    diffDates,
    diffToHtml
} from "./datecalc.js";

import {
    formatError
} from "./utils.js";

import {
    start,
    pause,
    reset
} from "./stopwatch.js";

import {
    changeFunction,
    dateCalcForm,
    dateCalcResult
} from "./selector.js";

import "./style.css";



dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let {
        firstDate,
        secondDate
    } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

const datecalcSelector = document.getElementById("datecalcSelect");
const timerSelector = document.getElementById("timerSelect");

datecalcSelector.addEventListener("click", changeFunction);

timerSelector.addEventListener("click", changeFunction);

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);