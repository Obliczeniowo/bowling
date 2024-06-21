import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class BowlingModule { }
