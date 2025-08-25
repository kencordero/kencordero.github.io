import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ken-scramble-bee',
  imports: [UpperCasePipe],
  templateUrl: './scramble-bee.component.html',
  styleUrl: './scramble-bee.component.css'
})
export class ScrambleBeeComponent {
  public words: string[] = [];
  public currentWord?: string = undefined;
  public scrambledWord?: string[] = undefined;

  constructor() {
    this.loadWordList();
  }

  public loadWordList() {
    fetch('assets/words_alpha.txt')
      .then(response => response.text())
      .then(text => {
        this.words = text.split('\n').map(word => word.trim()).filter(word => word.length > 3 && word.length < 20);
        this.words = this.filterWordsWithNoS();
      })
      .catch(error => console.error('Error loading word list:', error));
  }

  public getRandomWord(): void {
      const wordList = this.filterWordsByUniqueLetters(7);
      const randomIndex = Math.floor(Math.random() * wordList.length);
      this.currentWord = wordList[randomIndex];
      let scrambled: string = this.scrambleWord(this.currentWord);
      // Ensure the scrambled word is different from the original
      while (scrambled === this.currentWord) {
        scrambled = this.scrambleWord(this.currentWord);
      }

      const unique = this.getUniqueLetters(scrambled);
      // get letters from the set
      this.scrambledWord = Array.from(unique);
      console.log(`Word: ${this.currentWord}`);

  }

  public filterWordsWithNoS(): string[] {
      return this.words.filter(word => !word.includes('s'));
  }

  public filterWordsByLength(min: number, max: number): string[] {
      return this.words.filter(word => word.length >= min && word.length <= max);
  }

  public getUniqueLetters(word: string): Set<string> {
      const uniqueLetters = new Set(word.split(''));
      return uniqueLetters;
  }

  public filterWordsByUniqueLetters(unique: number): string[] {
      return this.words.filter(word => this.getUniqueLetters(word).size === unique);
  }

  public scrambleWord(word: string): string {
      const letters = word.split('');
      for (let i = letters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters.join('');
  }
}
