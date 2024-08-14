import { Injectable } from '@angular/core';
import { fromEvent, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TtsService {
  private voices: SpeechSynthesisVoice[] = [];
  public voices$:  Observable<SpeechSynthesisVoice[]>;
  
  constructor() {
    this.voices$ = fromEvent(speechSynthesis, 'voiceschanged')
    .pipe(
      map(() => speechSynthesis.getVoices().filter(voice => voice.name.includes('Google'))),
      tap((voices) => this.voices = voices),
    );

    this.voices$.subscribe({
      next: () => {
        console.log('voices', this.voices.map(voice => voice.name));
      }
    });
  }

  speak(text: string, voiceName?: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    if (!voiceName) {
      switch (text) {
        case "biryani":
          voiceName = '"Google हिन्दी"';
          break;
        case "Jicarilla":
        case "frijoles":
        case "telenovelas":
        case "tostones":
          voiceName = 'Google español';
          break;
        default:
          voiceName = 'Google US English';
          break;
      }
    }

    const voice = this.voices.find(voice => voice.name === voiceName);
    if (voice) {
      utterance.voice = voice
    }
    
    speechSynthesis.speak(utterance);
  }
}
