import { NgModule } from '@angular/core';

import { StuffRoutingModule } from './stuff-routing.module';
import { QuizService } from './services/quiz.service';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { ArithmeticService } from './services/arithmetic.service';
import { CapitalsComponent } from './capitals/capitals.component';
import { SharedModule } from '../shared/shared.module';
import { SpellingBeeComponent } from './spelling-bee/spelling-bee.component';
import { FlagQuizComponent } from './flag-quiz/flag-quiz.component';

@NgModule({
  declarations: [
    ArithmeticComponent,
    CapitalsComponent,
    SpellingBeeComponent,
    FlagQuizComponent
  ],
  imports: [
    StuffRoutingModule,
    SharedModule
  ],
  providers: [
    QuizService,
    ArithmeticService
  ],
})
export class StuffModule { }
