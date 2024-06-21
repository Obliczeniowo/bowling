import { ScoreModel } from "./score.model";

export class RoundsModel {
  list: ScoreModel[] = [];
  protected current = 0;

  counted: number[] = []; 

  constructor() {
    this.setEmpty();
  }

  setEmpty() {
    this.list = new Array(10).fill(0).map(() => ({}));
    this.current = 0;
    this.counted = [];
  }

  add(score: ScoreModel) {
    const { current } = this;

    if (current < 10) {
      this.list[this.current] = { ...score };
      const sum = (score.first || 0) + (score.second || 0);
      if (current > 0) {
        const previous = this.list[current - 1];
        this.counted[current] = this.counted[current - 1] + sum;
        console.log(previous);
        if ((previous.first || 0) + (previous.second || 0) === 10) {
          this.counted[current] += sum;
        }
      } else {
        this.counted[0] = sum;
      }
      this.current++;
    }
  }
}