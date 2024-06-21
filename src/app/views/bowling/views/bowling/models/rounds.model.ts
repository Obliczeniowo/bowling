import { ScoreModel } from "./score.model";

export class RoundsModel {
  list: ScoreModel[] = [];

  constructor() {
    this.setEmpty();
  }

  setEmpty() {
    this.list = new Array(10).fill(0).map(() => ({ first: 0, second: 0 }));
  }
}