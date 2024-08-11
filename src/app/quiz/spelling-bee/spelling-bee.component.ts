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

  constructor(private api: SpellingBeeService) {
    this.voices$ = fromEvent(speechSynthesis, 'voiceschanged')
    .pipe(
       map(() => speechSynthesis.getVoices().filter(voice => voice.lang.includes('en'))),
       tap((voices) => this.voices = voices),
    );
  }

  ngOnInit(): void {
    this.voices$.subscribe({
      next: () => {
        console.log('voices', this.voices);
        this.onClickNext();
      }
    });
  }

  onClickNext(): void {
    this.response = '';
    this.word = this.api.getNextWord();
    console.log('Word: ' + this.word);
    
    this.speak();
  }

  speak(): void {
    const utterance = new SpeechSynthesisUtterance(this.word);
    utterance.rate = 0.8;
    const voice = this.voices.find(voice => voice.name === 'Google US English');
    if (voice) {
      utterance.voice = voice
    }
    speechSynthesis.speak(utterance);
  }

  checkResponse(e: any): void {
    if (e.key !== 'Enter') return;
    
    //this.isCorrect = this.response === this.correctAnswer;
    setTimeout(() => this.onClickNext(), 1500);
    if (this.response?.toLowerCase() === this.word?.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  }
}
