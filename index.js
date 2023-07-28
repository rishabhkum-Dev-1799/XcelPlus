'use strict';

let cols = 26;
let rows = 100;

let addressColContainer = document.querySelector('.address-col-cont');
let addressRowContainer = document.querySelector('.address-row-cont');
let cellContainer = document.querySelector('.cell-cont');
let addressInput = document.querySelector('.cell-address-bar');

const addListenerForAddressBarDisplay = (cell, rowIndex, columnIndex) => {
    cell.addEventListener('click', (e) => {
        const rowNumber = rowIndex + 1;
        const columnName = String.fromCharCode(65 + columnIndex);
        addressInput.value = `${columnName}${rowNumber}`;
    })
};
for (let i = 0; i < rows; i++) {
    let addressRow = document.createElement('div');
    addressRow.setAttribute('class', 'address-row');
    addressRow.innerText = i + 1;
    addressRowContainer.appendChild(addressRow);
}

for (let i = 0; i < cols; i++) {
    let addressCol = document.createElement('div');
    addressCol.setAttribute('class', 'address-col');
    addressCol.innerText = String.fromCharCode(65 + i);
    addressColContainer.appendChild(addressCol);
}

for (let i = 0; i < rows; i++) {
    let cellRow = document.createElement('div');
    cellRow.setAttribute('class', 'cell-row');
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('contenteditable', 'true');
        cell.setAttribute('spellcheck', 'false');
        cell.setAttribute('rid', i);
        cell.setAttribute('cid', j);
        addListenerForAddressBarDisplay(cell, i, j);
        cellRow.appendChild(cell);
    }
    cellContainer.appendChild(cellRow);
}

