import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffRoutingModule } from './stuff-routing.module';
import { QuizService } from './services/quiz.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StuffRoutingModule
  ],
  providers: [ 
    QuizService
  ],
 
})
export class StuffModule { }
