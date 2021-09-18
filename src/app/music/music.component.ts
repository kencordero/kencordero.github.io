import { Component, OnInit } from '@angular/core';

import { videos } from './videos';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
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
