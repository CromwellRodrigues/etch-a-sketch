const container = document.getElementById('container');
const resizeButton = document.getElementById('resize');

const gridSize = 16;
const boardSize = 640;


container.style.width = `${boardSize}px`;
container.style.height = `${boardSize}px`;
container.style.display= 'flex';
container.style.flexWrap= 'wrap';



function newGrid() {
    console.log('new grid')
   const newGrid = prompt('Enter new grid size (max 100):'); 

   if (newGrid !== null) {
    const newSize = parseInt(newGrid);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    console.log(newSize);
    container.innerHTML = '';
    createGrid(newSize);
    return newSize;

   }
    
}

resizeButton.addEventListener('click', newGrid); 

function createGrid(size) {
    const cellSize = boardSize / size;
    container.style.width = `${boardSize}px`;
    container.style.height = `${boardSize}px`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = `${cellSize}px`;
        square.style.height = `${cellSize}px`;
        square.style.boxSizing = 'border-box';
        square.style.border = '1px solid #94a3b8';
        square.style.backgroundColor = '#f8fafc';

        square.addEventListener('mouseenter', () => {
            console.log('hovered');
            square.style.backgroundColor = randomRGB();
        });
        container.appendChild(square);
    }
}




function randomRGB () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


createGrid(16);