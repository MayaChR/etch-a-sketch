const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('.clear-btn')

function createGrid(rows, columns){
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        grid.appendChild(square);
    };
};

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

grid.addEventListener('mouseup', () => {
    isMouseDown = false;
});

clearBtn.addEventListener('click', () => {
    grid.childNodes.forEach(gridSquare => {
        gridSquare.style.backgroundColor = 'rgb(236, 236, 236)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createGrid(24, 24);
});