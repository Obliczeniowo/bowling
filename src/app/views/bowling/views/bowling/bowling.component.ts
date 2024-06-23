import { Component } from '@angular/core';
import { RoundsModel } from './models/rounds.model';
import { BowlingRoundComponent } from '@obliczeniowo/elementary/bowling-pins';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrl: './bowling.component.scss'
})
export class BowlingComponent {
  scores = new RoundsModel();

  add(round: BowlingRoundComponent) {
    this.scores.add({ ...round.scores });

    round.reset();
  }

  reset(round: BowlingRoundComponent) {
    this.scores.setEmpty();
    round.reset();
  }
}
