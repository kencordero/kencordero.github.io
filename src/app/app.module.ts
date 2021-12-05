import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { MainComponent } from './main/main.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MusicComponent,
    MainComponent,
    VideoPlayerComponent
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
    YouTubePlayerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
