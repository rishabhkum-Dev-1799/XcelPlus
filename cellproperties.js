' use strict';

//element selectors
let cut = document.querySelector('.cut-prop');
let copy = document.querySelector('.copy-prop');
let paste = document.querySelector('.paste-prop');
let bold = document.querySelector('.bold-prop');
let italic = document.querySelector('.italic-prop');
let underline = document.querySelector('.underlined-prop');
let alignment = document.querySelectorAll('.alignment-prop');
let leftAlignment = alignment[0];
let rightAlignment = alignment[1];
let centerAlignment = alignment[2];
let fontSize = document.querySelector('.font-size-prop');
let fontFamily = document.querySelector('.font-family-prop');
let fontColorPicker = document.querySelector('.font-color-picker');
let bgColorPicker = document.querySelector('.bg-color-picker');


// fake dbarray for containing 
let exceldb = [];
// global selected color property
const selectedProp = '#d1d8e0';
const unselectedProp = '';

// this is the for loop to complete the exceldb array 
for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProps = {
            bold: false,
            italic: false,
            underline: false,
            textColor: '#000000',
            bgColor: '#000000',
            fontSize: 16,
            fontFamily: 'monospace',
            alignment: 'left'
        }
        sheetRow.push(cellProps);
    }
    exceldb.push(sheetRow);
};
//two way binding for UI and cell modification in the db array
// event listeners
function decodeRIDCIDfromaddress(cellAddress) {
    // this function is to decode the cell address in the address bar into the matrix format;
    let rid = Number(cellAddress.slice(1)) - 1;
    let cid = Number(cellAddress.charCodeAt(0)) - 65;
    return [rid, cid];
};

function getActiveCell(address) {
    const [rid, cid] = decodeRIDCIDfromaddress(address);
    //important thing to learn is that how we can get the cell through the rid and cid;
    const currentCell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    const cellProp = exceldb[rid][cid];
    return {
        currentCell,
        cellProp
    };

};

// bold eventListner
bold.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.bold = !cellProp.bold;
    currentCell.style.fontWeight = cellProp.bold ? 'bold' : 'normal';
    bold.style.backgroundColor = cellProp.bold ? selectedProp : unselectedProp;
});
//italic eventlistener
italic.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.italic = !cellProp.italic;
    currentCell.style.fontStyle = cellProp.italic ? 'italic' : 'normal';
    italic.style.backgroundColor = cellProp.italic ? selectedProp : unselectedProp;
})
//underline eventlistener
underline.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.underline = !cellProp.underline;
    currentCell.style.textDecoration = cellProp.underline ? 'underline' : 'none';
    underline.style.backgroundColor = cellProp.underline ? selectedProp : unselectedProp;
})
// fontSize eventlister
fontSize.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.fontSize = fontSize.value;
    currentCell.style.fontSize = cellProp.fontSize + 'px';
    fontSize.value = cellProp.fontSize;
})
// fontfamily
fontFamily.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.fontFamily = fontFamily.value;
    currentCell.style.fontFamily = cellProp.fontFamily;
    fontFamily.value = cellProp.fontFamily;
})
// font color 
fontColorPicker.addEventListener('mouseover', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.textColor = fontColorPicker.value;
    currentCell.style.color = cellProp.textColor;
    fontColorPicker.value = cellProp.textColor;
});
// bg color 
bgColorPicker.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.bgColor = bgColorPicker.value;
    currentCell.style.backgroundColor = cellProp.bgColor;
    fontColorPicker.value = cellProp.bgColor;
});
// leftalign Evenlistener
leftAlignment.addEventListener('click', (event) => {
    const address = addressInput.value;
    const { currentCell, cellProp } = getActiveCell(address);
    cellProp.alignment = 'left';
    currentCell.style.textAlign = 'left';
    leftAlignment.style.backgroundColor = cellProp.alignment === 'left' ? selectedProp : unselectedProp;
})

