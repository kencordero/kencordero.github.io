import { Injectable } from '@angular/core';
import { fromEvent, map, Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TtsService {
  private voices: SpeechSynthesisVoice[] = [];
  public voices$:  Observable<SpeechSynthesisVoice[]>;
  
  constructor() {
    this.voices$ = fromEvent(speechSynthesis, 'voiceschanged')
    .pipe(
      map(() => speechSynthesis.getVoices()),
      tap((voices) => this.voices = voices),
      shareReplay(1)
    );
  }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  speak(text: string, voiceName?: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    if (!voiceName) {
      switch (text.toUpperCase()) {
        case "BIRYANI":
          voiceName = '"Google हिन्दी"';
          break;
        case "JICARILLA":
        case "FRIJOLES":
        case "TELENOVELAS":
        case "TOSTONES":
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
