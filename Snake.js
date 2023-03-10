class Snake {
  snakeBody;
  coordinates;
  #direction;
  interval;
  #restartButton;
  #exitButton;
  gameOver;

  render() {
    function setSnakeCoordinates() {
      let positionX = 4;
      let positionY = 4;
      return [positionX, positionY];
    }

    this.coordinates = setSnakeCoordinates();

    this.snakeBody = [
      document.querySelector('[posX= "' + this.coordinates[0] + '"][posY= "' + this.coordinates[1] + '"]'),
      document.querySelector('[posX= "' + this.coordinates[0] + '"][posY= "' + (this.coordinates[1] - 1) + '"]')
    ];

    for (let i = 0; i < this.snakeBody.length; i++) {
      i === 0 ? this.snakeBody[i].classList.add('snakeHead') : this.snakeBody[i].classList.add('snakeBody');
    }
  }

  #moveSnake() {
    const snakeCoordinates = [this.snakeBody[0].getAttribute('posX'), this.snakeBody[0].getAttribute('posY')];

    if (this.#direction === 'right') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[0] < 9) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordinates[0] + 1) + '"][posY= "' + snakeCoordinates[1] + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX="0"][posY= "' + snakeCoordinates[1] + '"]'));
      }
    } else if (this.#direction === 'left') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[0] > 0) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordinates[0] - 1) + '"][posY= "' + snakeCoordinates[1] + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX="9"][posY= "' + snakeCoordinates[1] + '"]'));
      }
    } else if (this.#direction === 'up') {
      this.snakeBody[0].classList.remove('snakeHead');
      this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
      this.snakeBody.pop();
      if (snakeCoordinates[1] < 9) {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "' + (+snakeCoordinates[1] + 1) + '"]'));
      } else {
        this.snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordinates[0] + '"][posY= "0"]'));
      }
    } else if (this.#direction === 'down') {
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
        this.#destroy();
        this.snakeBody[0].classList.remove('snakeHead');
        for (let j = 1; j < this.snakeBody.length; j++) {
          this.snakeBody[j].classList.remove('snakeBody');
        }
        this.gameOver = document.querySelector('.game_over');
        this.#restartButton = document.querySelector('.restart-button');
        this.#exitButton = document.querySelector('.exit-button');

        this.gameOver.style.display = 'block';
        this.#restartButton.style.display = 'block';
        this.#exitButton.style.display = 'block';

        snake.#restartButton.onclick = () => {
          window.location.reload();
        }
        snake.#exitButton.onclick = () => {
          const decision = confirm('???????? ???? ???????????????? ????????, ?????? ???????????? ?????????? ????????????????????. ???????????? ???? ???? ' +
            '?????????????????????????? ???????????????? ?????????');

          if (decision === true) {
            window.location.reload();
            localStorage.clear();
          }
        }
      }
    }
  }

  #destroy() {
    theFood.destroy();
    clearInterval(this.interval);
    counter.updateBestScore();
    counter.reset();
  }

  start() {
    window.onkeydown = (e) => {
      if (e.key === 'ArrowRight' && snake.#direction !== 'left') {
        snake.#direction = 'right';
      } else if (e.key === 'ArrowLeft' && snake.#direction !== 'right') {
        snake.#direction = 'left';
      } else if (e.key === 'ArrowUp' && snake.#direction !== 'down') {
        snake.#direction = 'up';
      } else if (e.key === 'ArrowDown' && snake.#direction !== 'up') {
        snake.#direction = 'down';
      }
    }

    field.gameField.addEventListener('click', () => {
      this.#direction = 'up';
      this.interval = setInterval(() => {
        snake.#moveSnake();
        theFood.eat();
      }, 500);
    })
  }
}

let snake = new Snake();