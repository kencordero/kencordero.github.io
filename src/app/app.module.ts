import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SafePipeModule } from 'safe-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { MainComponent } from './main/main.component';
import { CapitalsComponent } from './stuff/capitals/capitals.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MusicComponent,
    MainComponent,
    CapitalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    SafePipeModule,
  ],
  providers: [ 
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
