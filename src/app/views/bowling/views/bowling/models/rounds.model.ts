import { ScoreModel } from "./score.model";

/**
 * Not fully implemented scoring logic for case of Strike on 9-th and 10-th round that extend new posibility to get more scores
 */
export class RoundsModel {
  list: ScoreModel[] = [];
  protected current = 0;

  counted: number[] = [];
  totalScore: number = 0;

  constructor() {
    /** kind of trick to set last state from localstorage */
    const list = localStorage.getItem('list');
    const current = localStorage.getItem('current');
    if (list) {
      this.list = JSON.parse(list);
    }
    if (current) {
      this.current = JSON.parse(current);
    }
    if (!list) {
      this.setEmpty();
    } else {
      this.calculate();
    }
  }

  getCurrent() {
    return this.current;
  }

  setEmpty() {
    this.list = new Array(10).fill(0).map(() => ({}));
    this.current = 0;
    this.counted = [];
    this.totalScore = 0;
  }

  add(score: ScoreModel) {
    const { current } = this;

    if (current < this.max()) {
      this.list[this.current] = { ...score };
      this.current++;
      if (this.current === 10 && this.max() === 11 && this.list.length === 10) {
        this.list.push({});
      } else if (this.current === 11 && this.max() === 12 && this.list.length === 11) {
        this.list.push({});
      }
    }

    this.calculate();

    /** save state in localstorage to retrieve after user switch view or refresh page */
    localStorage.setItem('list', JSON.stringify(this.list));
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  protected max() {
    if (this.resultType(8) === 'Strike' && this.resultType(9) === 'Strike') {
      if (this.resultType(10) === 'Strike') {
        return 12;
      }
      return 11;
    }
    return 10;
  }

  protected calculate() {
    this.counted = [];
    this.totalScore = 0;
    for (let i = 0; i < 10; i++) {
      this.counted.push(this.count(i));
    }
    this.totalScore = this.total();
  }

  protected total() {
    return this.list.reduce((p, _, index) => p + (index < 10 ? this.count(index) : 0), 0);
  }

  protected count(index: number) {
    let sum = this.sum(index);
    let result = this.resultType(index);

    if (result === 'Strike') {
      sum += this.sum(index + 1);
      if (this.resultType(index + 1) === 'Strike') {
        sum += this.sum(index + 2);
      }
    } else if (result === 'Spare') {
      sum += this.sum(index + 1);
    }
    return sum;
  }

  /** only to use inside of class as helper */
  protected sum(index: number) {
    const score = this.list[index];

    if (score) {
      return (score.first || 0) + (score.second || 0);
    }
    return 0;
  }

  /** checking type to calculate */
  resultType(index: number): 'Strike' | 'Spare' | 'Open' | undefined {
    const score = this.list[index];

    if (score) {
      if (score.first === 10) {
        return 'Strike';
      } else if ((score.first || 0) + (score.second || 0) === 10) {
        return 'Spare';
      } else {
        return 'Open';
      }
    }

    return undefined;
  }
}