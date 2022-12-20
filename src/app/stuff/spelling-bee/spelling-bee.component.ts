import { Component } from '@angular/core';
import { SpellingBeeService } from '../services/spelling-bee.service';

@Component({
  selector: 'app-spelling-bee',
  templateUrl: './spelling-bee.component.html',
  styleUrls: ['./spelling-bee.component.css']
})
export class SpellingBeeComponent {
  public word: string;

  constructor(private api: SpellingBeeService) {
    this.word = this.api.getRandomWord();
  }

  onClickRandom(): void {
    this.word = this.api.getRandomWord();
  }
}
