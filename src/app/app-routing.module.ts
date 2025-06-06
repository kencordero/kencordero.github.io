import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'music', component: MusicComponent },
  { path: 'games/poker', loadComponent: () => import('./games/poker/poker.component').then(m => m.PokerComponent) },
  { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule) },
  // { path: 'practice/kanji', loadComponent: () => import('./practice/kanji/kanji.component').then(m => m.KanjiComponent) },
  { path: 'practice/jouyou-kanji', loadComponent: () => import('./practice/jouyou-kanji/jouyou-kanji.component').then(m => m.JouyouKanjiComponent) },
  { path: 'voices', loadComponent: () => import('./voices/voices.component').then(m => m.VoicesComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
