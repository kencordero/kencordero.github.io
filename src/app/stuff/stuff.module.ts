import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { StuffRoutingModule } from './stuff-routing.module';
import { QuizService } from './services/quiz.service';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { ArithmeticService } from './services/arithmetic.service';
import { CapitalsComponent } from './capitals/capitals.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    ArithmeticComponent,
    CapitalsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule,
    StuffRoutingModule
  ],
  providers: [ 
    QuizService,
    ArithmeticService
  ],
 
})
export class StuffModule { }
