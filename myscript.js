
let rowNum = 16;
let boxSize = 800 /rowNum;

const container = document.querySelector('#container');
let row;

function getInput(){
    let number = false;
    do{
        rowNum = parseInt(prompt("Please enter number between 1-100"));
        console.log(isNaN(rowNum));
        if (rowNum >= 1 && rowNum <=100 && !(isNaN(rowNum))){
            number = true;
            boxSize = 800 /rowNum;
            makeGrid(rowNum,boxSize);
        }
    }while(number == false);
}

getInput();

function changeGrid(){

    restartGrid();
    getInput();

}


function makeGrid(rowNum, boxSize){

    console.log(rowNum);

    for (let i = 0; i < rowNum; i++) {

        row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display:flex;, flex-direction:row;';
        row.style.margin = '0px';
        row.style.padding = '0px';

        for (let j = 0;  j < rowNum; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.innerHTML = ' ';

            col.style.width = boxSize +'px';
            col.style.height = boxSize +'px' ;

            col.addEventListener('mouseover', ()=> {
                col.style.backgroundColor = 'black';
            });

            row.appendChild(col);

            
        }

        container.appendChild(row);

    }
}

function restartGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}