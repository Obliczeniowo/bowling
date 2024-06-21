import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '@obliczeniowo/elementary/input';
import { ButtonsModule } from '@obliczeniowo/elementary/buttons';

import { BowlingRoutingModule } from './bowling-routing.module';
import { BowlingComponent } from './views/bowling/bowling.component';
import { NavigationComponent } from './views/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BowlingComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BowlingRoutingModule,
    InputModule,
    ButtonsModule,
    ReactiveFormsModule
  ]
})
export class BowlingModule { }
