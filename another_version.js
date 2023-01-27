const gameField = document.querySelector('.game_field');


for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  i >= 90 && i < 100 ? cell.style.borderBottom = '1px solid black' : '';
  gameField.appendChild(cell)
}

const cell = document.querySelector('.cell');
let createdCells = document.querySelectorAll('.cell');
const food = Math.floor(Math.random() * createdCells.length);
createdCells[food].classList.add('green');


class Game {
  constructor() {
    this.snakeBody = [[5, 5], [5, 4], [5, 3]];
    this.direction = 'right';
  }

  render() {

    let x = 0;
    let y = 9;

    for (let i = 0; i < createdCells.length; i++) {

      if (x > 9) {
        x = 0;
        y--;
      }

      createdCells[i].setAttribute('posY', y);
      createdCells[i].setAttribute('posX', x);
      x++;
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
      document.querySelector('[posX = "' + this.snakeBody[i][0] + '"][posY = "' + this.snakeBody[i][1] + '"]').classList.add('black');
    }
  }


  moveSnake() {
    let headPosition = document.querySelector('[posX = "' + this.snakeBody[0][0] + '"][posY = "' + this.snakeBody[0][1] + '"]');
    console.log(headPosition)
    let tailPosition = document.querySelector('[posX = "' + this.snakeBody[this.snakeBody.length - 1][0] + '"][posY = "' + this.snakeBody[this.snakeBody.length - 1][1] + '"]');
    // headPosition.classList.remove('black');

    window.onkeydown = (e) => {
      if (e.key === 'ArrowRight' && game.direction !== 'left') {
        game.direction = 'right';
      } else if (e.key === 'ArrowLeft' && game.direction !== 'right') {
        game.direction = 'left';
      } else if (e.key === 'ArrowUp' && game.direction !== 'down') {
        game.direction = 'up';
      } else if (e.key === 'ArrowDown' && game.direction !== 'up') {
        game.direction = 'down';
      }

      if (this.direction === 'right') {
        if (headPosition.getAttribute('posX') < 9) {
          game.snakeBody.unshift([game.snakeBody[0][0] += 1, game.snakeBody[0][1]]);
        } else {
          game.snakeBody.unshift([game.snakeBody[0][0] = 0, game.snakeBody[0][1]]);
        }
      } else if (this.direction === 'left') {
        if (headPosition.getAttribute('posX') > 0) {
          game.snakeBody.unshift([game.snakeBody[0][0] -= 1, game.snakeBody[0][1]]);
        } else {
          game.snakeBody.unshift([game.snakeBody[0][0] = 9, game.snakeBody[0][1]]);
        }
      } else if (this.direction === 'up') {
        if (headPosition.getAttribute('posY') < 9) {
          game.snakeBody.unshift([game.snakeBody[0][0], game.snakeBody[0][1] += 1]);
        } else {
          game.snakeBody.unshift([game.snakeBody[0][0], game.snakeBody[0][1] = 0]);
        }
      } else if (this.direction === 'down') {
        if (headPosition.getAttribute('posY') > 0) {
          game.snakeBody.unshift([game.snakeBody[0][0], game.snakeBody[0][1] -= 1]);
        } else {
          game.snakeBody.unshift([game.snakeBody[0][0], game.snakeBody[0][1] = 9]);
        }
      }



      tailPosition.classList.remove('black');
      game.snakeBody.pop();

      for (let i = 0; i < game.snakeBody.length; i++) {
        document.querySelector('[posX = "' + game.snakeBody[i][0] + '"][posY = "' + game.snakeBody[i][1] + '"]').classList.add('black');
      }
    }

  }
    start() {
      this.render();

      setInterval(() => this.moveSnake(), 1000);
      console.log(this.snakeBody)
    }

}

let game = new Game();
game.start();

