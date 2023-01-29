const gameField = document.querySelector('.game_field');


for (let i = 0; i < 100; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  gameField.appendChild(cell)
}

// const cell = document.querySelector('.cell');
let createdCells = document.querySelectorAll('.cell');


class Game {

  snakeBody;
  food;
  direction = 'up';
  coordinates;
  foodCoordinates;
  interval;

  constructor() {
    this.direction = '';
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

    function setSnakeCoordinates() {
      let positionX = 4;
      let positionY = 4;
      return [positionX, positionY];
    }

    this.coordinates = setSnakeCoordinates();

    this.snakeBody = [
      document.querySelector('[posX= "' + this.coordinates[0] + '"][posY= "' + this.coordinates[1] + '"]'),
      document.querySelector('[posX= "' + this.coordinates[0] + '"][posY= "' + (this.coordinates[1] - 1) + '"]'),
      document.querySelector('[posX= "' + this.coordinates[0] + '"][posY= "' + (this.coordinates[1] - 2) + '"]')
    ];

    for (let i = 0; i < this.snakeBody.length; i++) {
      i === 0 ? this.snakeBody[i].classList.add('snakeHead') : this.snakeBody[i].classList.add('snakeBody');
    }

    function setFoodCoordinates() {
      let positionX = Math.floor(Math.random() * 9);
      let positionY = Math.floor(Math.random() * 9);
      return [positionX, positionY];
    }

    this.foodCoordinates = setFoodCoordinates();
    this.food = document.querySelector('[posX= "' + this.foodCoordinates[0] + '"][posY= "' + this.foodCoordinates[1] + '"]')

    this.food.classList.add('green');

    window.onload = () => {
      if (!localStorage.hasOwnProperty('bestScore')) {
        recordCounter.innerHTML = counter.bestScore;
      } else {
        recordCounter.innerHTML = localStorage.getItem('bestScore');
      }
    };
  }

  moveSnake() {
    const snakeCoordinates = [this.snakeBody[0].getAttribute('posX'), this.snakeBody[0].getAttribute('posY')];

    if (this.direction === 'right') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[0] < 9) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordinates[0] + 1) + '"][posY= "' + snakeCoordinates[1] + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX="0"][posY= "' + snakeCoordinates[1] + '"]'));
      }
    } else if (this.direction === 'left') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[0] > 0) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordinates[0] - 1) + '"][posY= "' + snakeCoordinates[1] + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX="9"][posY= "' + snakeCoordinates[1] + '"]'));
      }
    } else if (this.direction === 'up') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[1] < 9) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "' + (+snakeCoordinates[1] + 1) + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "0"]'));
      }
    } else if (this.direction === 'down') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[1] > 0) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "' + (+snakeCoordinates[1] - 1) + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "9"]'));
      }
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
      i === 0 ? this.snakeBody[i].classList.add('snakeHead') : this.snakeBody[i].classList.add('snakeBody');
    }

    for (let i = 1; i < this.snakeBody.length; i++) {
      if (this.snakeBody[0] === this.snakeBody[i]) {
        this.destroy();
      }
    }
  }

  eat() {
    function setNewFoodCoordinates() {
      let positionX = Math.floor(Math.random() * 9);
      let positionY = Math.floor(Math.random() * 9);
      return [positionX, positionY];
    }

    if (this.food === this.snakeBody[0]) {
      counter.updateActualScore();
      counter.render()
      this.snakeBody.push(document.querySelector('[posX= "' + this.coordinates[1] + '"][posY= "' + (this.coordinates[1]) + '"]'));
      this.food.classList.remove('green');

      let newFoodCoordinates = setNewFoodCoordinates();
      this.food = document.querySelector('[posX= "' + newFoodCoordinates [0] + '"][posY= "' + newFoodCoordinates [1] + '"]')
      this.food.classList.add('green');
    }

    for (let i = 0; i < this.snakeBody.length; i++) {
      if (this.food === this.snakeBody[i]) {
        this.food.classList.remove('green');
        let newFoodCoordinates = setNewFoodCoordinates();
        this.food = document.querySelector('[posX= "' + newFoodCoordinates [0] + '"][posY= "' + newFoodCoordinates [1] + '"]')
        this.food.classList.add('green');
      }
    }
  }

  destroy() {
        this.food.classList.remove('green');
        clearInterval(this.interval)
        counter.updateBestScore();
        counter.reset();
      }

  clearRecord() {
    const button = document.querySelector('.button');
    button.onclick = () => {
      counter.resetRecord();
    }
  }

  start() {
    this.render();
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
    }

    this.interval = setInterval(() => {
      this.moveSnake();
      this.eat();
    }, 500);
      this.clearRecord();
  }
}

let game = new Game();
game.start();

