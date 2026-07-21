import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { videos } from './videos';
import { MatButton } from '@angular/material/button';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';


@Component({
    selector: 'ken-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatButton, VideoPlayerComponent]
})
export class MusicComponent implements OnInit {
  videos: any[] = videos;
  activeVideo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveVideo(url: string): void {
    this.activeVideo = url;
  }

}
