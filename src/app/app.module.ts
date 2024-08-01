import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { MainComponent } from './main/main.component';
import { VideoPlayerComponent } from './shared/components/video-player/video-player.component';
import { SharedModule } from './shared/shared.module';

@NgModule({ declarations: [
        AppComponent,
        AboutComponent,
        MusicComponent,
        MainComponent,
        VideoPlayerComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
