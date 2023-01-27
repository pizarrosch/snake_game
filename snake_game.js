// const gameField = document.querySelector('.game_field');
// let table = document.createElement('table');
// table.classList.add('table');
//
// for (let i = 0; i < 10; i++) {
//   let row = document.createElement('tr');
//   row.classList.add('row');
//   for (let j = 0; j < 10; j++) {
//     let cell = document.createElement('td');
//     cell.classList.add('cell');
//     row.appendChild(cell);
//     // For the last row we do not remove the bottom border
//     i === 9 ? cell.style.borderBottom = '1px solid black' : '';
//   }
//   table.appendChild(row);
// }
//
// gameField.appendChild(table);
//
// let cell = document.querySelector('.cell');
// let createdCells = document.querySelectorAll('.cell');
// let createdRows = document.querySelectorAll('.row');
// const food = Math.floor(Math.random() * createdCells.length);
// createdCells[food].classList.add('green');
//
// class Game {
//   render() {
//     let Y = document.querySelectorAll('.row');
//     let X = document.querySelectorAll('.cell');
//
//     let x = 0;
//     let y = 9;
//
//     for (let i = 0; i < X.length; i++) {
//
//       Y[i].setAttribute('posY', y);
//       X[i].setAttribute('posX', x);
//       x++;
//       y--;
//     }
//   }
// }
//
//
// // class Snake {
// //   constructor() {
// //     this.cells = createdCells;
// //     this.body = [44, 54, 64];
// //     this.body.map((item) => {
// //       this.cells[item].classList.add('black');
// //     })
// //   }
// //
// //   handleNextPosition() {
// //     let head = this.body[0];
// //     let tail = this.body[this.body.length - 1];
// //     let previousPosition = snake.cells[tail];
// //     let nextPosition;
// //     window.onkeydown = function (e) {
// //       let rightInterval = setInterval(() => {
// //         if (e.key === 'ArrowRight') {
// //           nextPosition = head += 1;
// //           snake.body.unshift(nextPosition);
// //           snake.body.pop();
// //           snake.body.map((item) => {
// //             snake.cells[item].classList.add('black');
// //             if(snake.cells[tail]) {
// //               snake.cells[item].classList.remove('black');
// //             }
// //           })
// //           if(cell.dataset.cells >= 9) {
// //             clearInterval(rightInterval);
// //           }
// //         } else if (e.key === 'ArrowLeft') {
// //           nextPosition = snake.cells[--head];
// //         } else if (e.key === 'ArrowUp') {
// //           nextPosition = snake.cells[head - 10];
// //         } else if (e.key === 'ArrowDown') {
// //           nextPosition = snake.cells[head - 10];
// //         }
// //        return nextPosition;
// //
// //
// //       }, 1000)
// //
// //     }
// //   }
// // }
//
// let game = new Game();
// game.render();
//
// // // The initial position of the snake is set in the middle.
// // // The cell of row 4 and row 5 correspondingly are black
// // createdCells[a].classList.add('black');
// // createdCells[b].classList.add('black');
// //
// // window.onkeydown = function (e) {
// //   if(e.key === 'ArrowRight') {
// //     if(createdCells.classList.contains('black')) {
// //       // createdCells[a].classList.remove('black');
// //       createdCells[a++].classList.add('black');
// //     }
// //     }
// // }
//
