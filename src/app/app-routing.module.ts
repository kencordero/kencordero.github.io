import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CapitalsComponent } from './games/capitals/capitals.component';
import { MainComponent } from './main/main.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'music', component: MusicComponent },
  { path: 'stuff/capitals', component: CapitalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
