class Game {

  render() {
    field.render();
    snake.render();
    theFood.render();
    window.onload = () => {
      if (!localStorage.hasOwnProperty('bestScore')) {
        recordCounter.innerHTML = counter.bestScore;
      } else {
        recordCounter.innerHTML = localStorage.getItem('bestScore');
      }
    };
  }

  start() {
    this.render();
    snake.start();
    counter.clearRecord();
  }
}

let game = new Game();
game.start();