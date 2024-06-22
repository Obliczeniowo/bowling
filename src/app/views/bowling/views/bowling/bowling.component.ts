import { Component } from '@angular/core';
import { RoundsModel } from './models/rounds.model';
import { FormGroup } from '@angular/forms';
import { BowlingControlComponent } from '../../../../controls/bowling-control/bowling-control.component';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrl: './bowling.component.scss'
})
export class BowlingComponent {
  scores = new RoundsModel();

  form!: FormGroup;

  translationgs: {[error: string]: string} = {
    max: "Maximum points is 10",
    min: "Minimum points is 0",
    required: "Value not set or unproper"
  }

  add(first: BowlingControlComponent, second: BowlingControlComponent) {
    this.scores.add({
      first: first.count(),
      second: second.count()
    })

    first.reset();
    second.reset();
  }

  reset(first: BowlingControlComponent, second: BowlingControlComponent) {
    this.scores.setEmpty();
    first.reset();
    second.reset();
  }

  reverse(bowling: boolean[]) {
    return bowling.map(b => !b);
  }
}
