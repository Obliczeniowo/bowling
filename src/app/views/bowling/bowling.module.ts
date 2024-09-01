import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@obliczeniowo/elementary/buttons';
import { BowlingPinsModule } from '@obliczeniowo/elementary/bowling-pins';

import { BowlingRoutingModule } from './bowling-routing.module';
import { BowlingComponent } from './views/bowling/bowling.component';
import { NavigationComponent } from './views/navigation/navigation.component';


@NgModule({
  declarations: [
    BowlingComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BowlingRoutingModule,
    ButtonsModule,
    BowlingPinsModule
  ]
})
export class BowlingModule { }
