class Field {

  render() {
    let gameField = document.querySelector('.game_field');
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      gameField.append(cell)

      let x = 0;
      let y = 9;

      const createdCells = document.querySelectorAll('.cell');

      for (let i = 0; i < createdCells.length; i++) {

        if (x > 9) {
          x = 0;
          y--;
        }

        createdCells[i].setAttribute('posY', `${y}`);
        createdCells[i].setAttribute('posX', `${x}`);
        x++;
      }
    }
  }
}

let field = new Field();





