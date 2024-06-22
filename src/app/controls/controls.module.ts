import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BowlingControlComponent } from './bowling-control/bowling-control.component';

@NgModule({
  declarations: [
    BowlingControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BowlingControlComponent
  ]
})
export class ControlsModule { }
