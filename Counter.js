const mainCounter = document.querySelector('.actual_counter');
const recordCounter = document.querySelector('.best_counter');

class Counter {
  constructor(score, bestScore) {
    this.score = score;
    this.bestScore = bestScore;
    mainCounter.append(`${score}`);
    recordCounter.append(`${bestScore}`);
  }

  render() {
    mainCounter.innerHTML = this.score;
    recordCounter.innerHTML = localStorage.getItem('bestScore');
    if (!localStorage.hasOwnProperty('bestScore')) {
      recordCounter.innerHTML = this.bestScore;
    }
  }

  updateActualScore() {
    this.score += 1;
  }

  updateBestScore() {
      if (this.score < localStorage.getItem('bestScore')) {
        recordCounter.innerHTML = localStorage.getItem('bestScore');
      } else {
        localStorage.setItem('bestScore', this.score);
        recordCounter.innerHTML = localStorage.getItem('bestScore');
      }
  }

  reset() {
    this.score = 0;
    mainCounter.innerHTML = this.score;
  }

  resetRecord() {
    localStorage.clear();
    recordCounter.innerHTML = this.bestScore;
  }
}

let counter = new Counter(0, 0);