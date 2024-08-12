import { Component, OnInit } from '@angular/core';
import SpellingBeeService from '../../services/spelling-bee.service';
import { fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-spelling-bee',
  templateUrl: './spelling-bee.component.html',
  styleUrls: ['./spelling-bee.component.css']
})
export class SpellingBeeComponent implements OnInit {
  public word?: string;
  public dictionaryEntry: any;
  public definitions: any;
  private voices: SpeechSynthesisVoice[] = [];
  public response: string | undefined;
  public voices$:  Observable<SpeechSynthesisVoice[]>;
  public isCorrect: boolean | undefined;

  public rightAnswerCount = 0;
  public totalAnswerCount = 0;

  constructor(private api: SpellingBeeService) {
    this.voices$ = fromEvent(speechSynthesis, 'voiceschanged')
    .pipe(
       map(() => speechSynthesis.getVoices().filter(voice => voice.name.includes('Google'))),
       tap((voices) => this.voices = voices),
    );
  }

  ngOnInit(): void {
    this.voices$.subscribe({
      next: () => {
        console.log('voices', this.voices.map(voice => voice.name));
        this.onClickNext();
      }
    });
  }

  onClickNext(): void {
    this.response = '';
    this.isCorrect = undefined;
    this.word = this.api.getNextWord();
    
    this.speak();
  }

  speak(): void {
    const utterance = new SpeechSynthesisUtterance(this.word);
    utterance.rate = 0.8;
    let voiceName: string;
    switch (this.word) {
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

    const voice = this.voices.find(voice => voice.name === voiceName);
    if (voice) {
      utterance.voice = voice
    }
    speechSynthesis.speak(utterance);
  }

  checkResponse(e: any): void {
    if (e.key !== 'Enter') return;

    this.totalAnswerCount++;
    if (this.response?.toLowerCase() === this.word?.toLowerCase()) {
      this.isCorrect = true;
      this.rightAnswerCount++;
      setTimeout(() => this.onClickNext(), 1500);
    } else {
      this.isCorrect = false;
      setTimeout(() => this.onClickNext(), 3000);
    }
  }

  score(): number {
    if (this.totalAnswerCount === 0) return 0;

    return Math.round(this.rightAnswerCount / this.totalAnswerCount * 100);
  }
}
