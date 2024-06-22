import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '@obliczeniowo/elementary/input';
import { ButtonsModule } from '@obliczeniowo/elementary/buttons';

import { BowlingRoutingModule } from './bowling-routing.module';
import { BowlingComponent } from './views/bowling/bowling.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from '../../controls/controls.module';


@NgModule({
  declarations: [
    BowlingComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BowlingRoutingModule,
    ButtonsModule,
    ControlsModule
  ]
})
export class BowlingModule { }
