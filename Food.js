class Food {

  food;
  foodCoordinates;

  render() {
    function setFoodCoordinates() {
      let positionX = Math.floor(Math.random() * 9);
      let positionY = Math.floor(Math.random() * 9);
      return [positionX, positionY];
    }

    this.foodCoordinates = setFoodCoordinates();
    this.food = document.querySelector('[posX= "' + this.foodCoordinates[0] + '"][posY= "' + this.foodCoordinates[1] + '"]')

    this.food.classList.add('green');
  }

  eat() {
    function setNewFoodCoordinates() {
      let positionX = Math.floor(Math.random() * 9);
      let positionY = Math.floor(Math.random() * 9);
      return [positionX, positionY];
    }

    if (this.food === snake.snakeBody[0]) {
      counter.updateActualScore();
      counter.render()
      snake.snakeBody.push(document.querySelector('[posX= "' + snake.coordinates[1] + '"][posY= "' + (snake.coordinates[1]) + '"]'));
      this.food.classList.remove('green');

      let newFoodCoordinates = setNewFoodCoordinates();
      this.food = document.querySelector('[posX= "' + newFoodCoordinates [0] + '"][posY= "' + newFoodCoordinates [1] + '"]')
      this.food.classList.add('green');
    }

    for (let i = 0; i < snake.snakeBody.length; i++) {
      if (this.food === snake.snakeBody[i]) {
        this.food.classList.remove('green');
        let newFoodCoordinates = setNewFoodCoordinates();
        this.food = document.querySelector('[posX= "' + newFoodCoordinates [0] + '"][posY= "' + newFoodCoordinates [1] + '"]')
        this.food.classList.add('green');
      }
    }
  }

  destroy() {
    this.food.classList.remove('green');
  }
}

let theFood = new Food();