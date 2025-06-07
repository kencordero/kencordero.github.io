import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { shuffle } from 'lodash';
import { KatakanaPipe } from 'src/app/pipes/katakana.pipe';
import { RomajiPipe } from 'src/app/pipes/romaji.pipe';
import { TtsService } from 'src/app/services/tts.service';
import { kanji } from 'src/app/shared/data-sets/kanji-jouyou';

@Component({
    selector: 'app-jouyou-kanji',
    imports: [MatButtonToggleModule, FormsModule, KatakanaPipe, RomajiPipe, MatTooltipModule],
    templateUrl: './jouyou-kanji.component.html',
    styleUrl: './jouyou-kanji.component.css'
})
export class JouyouKanjiComponent {
  public letters: any[];
  public filteredLetters: any[];
  public currentLetterIndex = 0;
  public currentLetter: any;
  public selectedGrades: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  constructor(private ttsService: TtsService) {
    const data: any = kanji;
    const arr: any[] = [];
    for (let i in kanji) {
      const l = {
        'kanji': i,
        'grade': data[i]['grade'],
        'meanings': data[i]['meanings'],
        'kunyomi': data[i]['readings_kun'],
        'onyomi': data[i]['readings_on']
      }; 
      arr.push(l);
    }

    this.letters = shuffle(arr);
    this.filteredLetters = this.letters.slice();
  }

  onNextLetter() {
    this.currentLetterIndex++;
    this.currentLetter = this.filteredLetters[this.currentLetterIndex];
    console.log(this.currentLetter);
  }

  onSpeak(word: string) {
    this.ttsService.speak(word, "Google 日本語");
  }

  onGradeChange(event: any): void {
    this.letters = shuffle(this.letters);
    this.filteredLetters = this.letters.filter((letter) => {
      return event.value == letter.grade;
    });
    this.currentLetterIndex = 0;
    this.onNextLetter();
  }
}
