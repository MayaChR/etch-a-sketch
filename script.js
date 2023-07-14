const grid = document.querySelector('#grid');

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
        e.target.style.backgroundColor = 'darkgrey';
    };
});

grid.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('DOMContentLoaded', () => {
    createGrid(24, 24);
});