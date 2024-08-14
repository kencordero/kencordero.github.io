import { Component } from '@angular/core';
import { kanji } from '../../shared/data-sets/kanji';
import { shuffle } from 'lodash';
import { MatCardModule } from '@angular/material/card';
import { TtsService } from 'src/app/services/tts.service';

@Component({
  selector: 'app-kanji',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './kanji.component.html',
  styleUrl: './kanji.component.css'
})
export class KanjiComponent {
  public letters: any[];
  public currentLetter = 0;

  constructor(private ttsService: TtsService) {
    this.letters = shuffle(kanji);
  }

  onNextLetter() {
    this.currentLetter++;
  }

  onSpeak(word: string) {
    this.ttsService.speak(word, "Google 日本語");
  }
}
