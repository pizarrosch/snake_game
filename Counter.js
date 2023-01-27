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

  }

  updateActualScore() {
    this.score += 1;
  }

  updateBestScore() {
    if(this.score > this.bestScore) {
      this.bestScore = this.score;
    }
    return this.bestScore;
  }

  reset() {
    this.score = 0;
  }
}

let counter = new Counter(0, 0);
mainCounter.innerHTML = counter.score;
recordCounter.innerHTML = counter.bestScore;
