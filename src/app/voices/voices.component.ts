import { Component, OnInit } from '@angular/core';
import { TtsService } from '../services/tts.service';

@Component({
    selector: 'app-voices',
    imports: [],
    templateUrl: './voices.component.html',
    styleUrl: './voices.component.css'
})
export class VoicesComponent implements OnInit {
  public voices: SpeechSynthesisVoice[] = [];
  
  constructor(private tts: TtsService) {}

  ngOnInit(): void {
    this.tts.voices$.subscribe({
      next: (voices) => {
        this.voices = voices;
      }
    });
  }
}
