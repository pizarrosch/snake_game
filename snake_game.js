const mainContainer = document.querySelector('.main-container');

let table = document.createElement('table');
table.classList.add('table');

let i;
let a = 44;
let b = 54

for (let i = 0; i < 10; i++) {
  let row = document.createElement('tr');
  row.classList.add('row');
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('td');
    cell.classList.add('cell');
    row.appendChild(cell);
    // For the last row we do not remove the bottom border
    i === 9 ? cell.style.borderBottom = '1px solid black' : '';
  }
  table.appendChild(row);
}

mainContainer.appendChild(table);

const createdRows = document.querySelectorAll('.row');
const createdCell = document.querySelector('.cell');
let createdCells = document.querySelectorAll('.cell');
const randomCell = Math.floor(Math.random() * createdCells.length);
createdCells[randomCell].classList.add('green');


class Snake {
  constructor() {
    this.row = createdRows;
    this.cell = createdCells;
    this.body = [[this.row[4], this.cell[4]], [this.row[5], this.cell[4]]];
    this.body.forEach((arr, i) => {
     arr[1].classList.add('black')
    })
  }


  update() {
    let nextPosition = this.handleNextPosition();
    this.body.unshift(nextPosition);
    this.body.pop();
  }

 handleNextPosition() {
    let head = this.body[0];
    let nextPosition;
    window.onkeydown = function(e) {
      if (e.key === 'ArrowRight') {
        nextPosition = [head[0], head[1] + 1];
       } else if (e.key === 'ArrowLeft') {
        nextPosition = [head[0], head[1] - 1];
      } else if (e.key === 'ArrowUp') {
        nextPosition = [head[0] + 1, head[1]];
      } else if (e.key === 'ArrowDown') {
        nextPosition = [head[0] - 1, head[1]];
      }
    }
    return nextPosition;
 }
}

let snake = new Snake();
snake.update();
// // The initial position of the snake is set in the middle.
// // The cell of row 4 and row 5 correspondingly are black
// createdCells[a].classList.add('black');
// createdCells[b].classList.add('black');
//
// window.onkeydown = function (e) {
//   if(e.key === 'ArrowRight') {
//     if(createdCells.classList.contains('black')) {
//       // createdCells[a].classList.remove('black');
//       createdCells[a++].classList.add('black');
//     }
//     }
// }

