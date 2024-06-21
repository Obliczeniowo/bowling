import { ScoreModel } from "./score.model";

export class RoundsModel {
  list: ScoreModel[] = [];
  protected current = 0;

  constructor() {
    this.setEmpty();
  }

  setEmpty() {
    this.list = new Array(10).fill(0).map(() => ({}));
    this.current = 0;
  }

  add(score: ScoreModel) {
    if (this.current < 10) {
      this.list[this.current] = { ...score };
      this.current++;
    }
  }
}