import { Component } from '@angular/core';
import { RoundsModel } from './models/rounds.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        'first': [ null, [Validators.required, Validators.min(0), Validators.max(10)]],
        'second': [ null, [Validators.required, Validators.min(0), Validators.max(10)]]
      }
    )
  }

  add() {
    if (this.form.valid) {
      this.scores.add(this.form.getRawValue());
      this.form.setValue({ first: null, second: null});
      this.form.markAsUntouched();
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.scores.setEmpty();
  }
}
