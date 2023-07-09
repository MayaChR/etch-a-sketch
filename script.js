const grid = document.querySelector('#grid');

function createGrid(rows, columns){
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        grid.appendChild(square);
    };
};

document.addEventListener('DOMContentLoaded', (e) => {
    createGrid(16, 16);
});