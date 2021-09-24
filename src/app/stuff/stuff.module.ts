import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffRoutingModule } from './stuff-routing.module';
import { QuizService } from './services/quiz.service';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { ArithmeticService } from './services/arithmetic.service';


@NgModule({
  declarations: [
    ArithmeticComponent
  ],
  imports: [
    CommonModule,
    StuffRoutingModule
  ],
  providers: [ 
    QuizService,
    ArithmeticService
  ],
 
})
export class StuffModule { }
