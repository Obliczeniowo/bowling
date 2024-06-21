import { Component } from '@angular/core';
import { RoundsModel } from './models/rounds.model';

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrl: './bowling.component.scss'
})
export class BowlingComponent {
  scores = new RoundsModel();
}
