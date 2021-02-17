export function changeFunction(event) {
    let targetId = event.target.id;
    if (targetId == 'datecalcSelect') {
        dateCalcForm.style.display = 'block';
        timerForm.style.display = 'none';
    } else {
        dateCalcForm.style.display = 'none';
        timerForm.style.display = 'block';
    }
}

export const dateCalcForm = document.getElementById("datecalc");
export const dateCalcResult = document.getElementById("datecalc__result");
export const timerForm = document.getElementById("timer");