import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';
import { CapitalsComponent } from './capitals/capitals.component';
import { SpellingBeeComponent } from './spelling-bee/spelling-bee.component';
import { FlagsComponent } from './flags/flags.component';
import { HiraganaComponent } from './hiragana/hiragana.component';
import { DevanagariComponent } from './devanagari/devanagari.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { KanjiComponent } from './kanji/kanji.component';

const routes: Routes = [
  { path: 'capitals', component: CapitalsComponent },
  { path: 'arithmetic', component: ArithmeticComponent },
  { path: 'spelling-bee', component: SpellingBeeComponent },
  { path: 'flags', component: FlagsComponent },
  { path: 'hiragana', component: HiraganaComponent},
  { path: 'katakana', component: KatakanaComponent},
  { path: 'kanji', component: KanjiComponent},
  { path: 'devanagari', component: DevanagariComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
