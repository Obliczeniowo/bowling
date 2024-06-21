import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BowlingComponent } from './views/bowling/bowling.component';
import { NavigationComponent } from './views/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: BowlingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BowlingRoutingModule { }
