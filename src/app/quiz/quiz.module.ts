import { NgModule } from '@angular/core';

import { QuizRoutingModule } from './quiz-routing.module';
import { CapitalQuizService } from '../services/capital-quiz.service';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { ArithmeticService } from '../services/arithmetic.service';
import { CapitalsComponent } from './capitals/capitals.component';
import { SharedModule } from '../shared/shared.module';
import { SpellingBeeComponent } from './spelling-bee/spelling-bee.component';
import { FlagQuizComponent } from './flag-quiz/flag-quiz.component';
import { FlagQuizService } from '../services/flag-quiz.service';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { ScriptComponent } from './script/script.component';
import { DevanagariComponent } from './devanagari/devanagari.component';
import { KanjiComponent } from './kanji/kanji.component';
import { KatakanaComponent } from './katakana/katakana.component';

@NgModule({
  declarations: [
    ArithmeticComponent,
    CapitalsComponent,
    SpellingBeeComponent,
    FlagQuizComponent,
    HiraganaComponent,
    DevanagariComponent,
    KanjiComponent,
    KatakanaComponent,
    ScriptComponent,
  ],
  imports: [
    QuizRoutingModule,
    SharedModule
  ],
  providers: [
    CapitalQuizService,
    FlagQuizService,
    ArithmeticService
  ],
})
export class QuizModule { }
