'use strict'

// elements

// adding blur events
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const cell = document.querySelector(`.cell[rid='${i}'][cid='${j}']`);
        cell.addEventListener('blur', (event) => {
            const address = addressInput.value;
            const { currentCell, cellProp } = getActiveCell(address);
            const enteredData = currentCell.innerText;
            cellProp.value = enteredData;
            console.log('value', cellProp.value);
            console.log('blur event');
        })
    }
}

// functions for the formulas
function evaluateFormula(formula) {
    return eval(formula);
};
function setCellFormulaEvaluatedValue(evaluatedValue, evaluateFormula) {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    //UI Change;
    currentCell.innerText = evaluatedValue;
    // db change
    cellProp.value = evaluatedValue;
    cellProp.formula = evaluateFormula;
};

formulaBar.addEventListener('keydown', (event) => {
    const inputFormula = formulaBar.value;
    if (event.key === "Enter" && inputFormula) {
        const evaluatedValue = evaluateFormula(inputFormula);
        setCellFormulaEvaluatedValue(evaluatedValue, inputFormula);
    }
});
