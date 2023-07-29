const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('.clear-btn')
const gridInput = document.querySelector('#change-grid')

function createGrid(num){
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        grid.appendChild(square);
    };
};

function changeGrid() {
    let newGrid = gridInput.value;

    if (!newGrid) {
        createGrid(24);
    } else if (newGrid >= 2 && newGrid <= 100) {
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        };
        createGrid(newGrid);
    };
};

gridInput.addEventListener('input', () => {
    changeGrid()
})

let isMouseDown = false;

grid.addEventListener('mousedown', () => {
    isMouseDown = true;
});

grid.addEventListener('mouseover', (e) => {
    if (!isMouseDown) return;

    if (isMouseDown) {
        e.target.style.backgroundColor = '#202528';
    };
});

document.addEventListener('mouseup', (e) => {
    isMouseDown = false;
});

clearBtn.addEventListener('click', () => {
    grid.childNodes.forEach(gridSquare => {
        gridSquare.style.backgroundColor = 'rgb(236, 236, 236)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createGrid(24);
});