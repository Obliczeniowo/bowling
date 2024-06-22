import { Component } from '@angular/core';
import { RoundsModel } from './models/rounds.model';
import { BowlingPinsComponent } from '@obliczeniowo/elementary/bowling-pins';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrl: './bowling.component.scss'
})
export class BowlingComponent {
  scores = new RoundsModel();

  add(first: BowlingPinsComponent, second: BowlingPinsComponent) {
    this.scores.add({
      first: first.count(),
      second: second.count()
    })

    first.reset();
    second.reset();
  }

  reset(first: BowlingPinsComponent, second: BowlingPinsComponent) {
    this.scores.setEmpty();
    first.reset();
    second.reset();
  }

  reverse(bowling: boolean[]) {
    return bowling.map(b => !b);
  }
}
