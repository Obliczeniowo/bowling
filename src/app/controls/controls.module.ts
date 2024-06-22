import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BowlingPinsModule } from '@obliczeniowo/elementary/bowling-pins';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BowlingPinsModule
  ],
  exports: [
    BowlingPinsModule
  ]
})
export class ControlsModule { }
