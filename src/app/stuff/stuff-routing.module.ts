import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingBeeComponent } from './spelling-bee/spelling-bee.component';

const routes: Routes = [
  { path: 'capitals', component: CapitalsComponent },
  { path: 'arithmetic', component: ArithmeticComponent },
  { path: 'spelling-bee', component: SpellingBeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuffRoutingModule { }
