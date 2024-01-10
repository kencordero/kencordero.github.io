import { Injectable } from '@angular/core';
import { words as words24 } from 'src/app/shared/data-sets/words-2024';
import { words as words23 } from 'src/app/shared/data-sets/words-2023';

@Injectable({
  providedIn: 'root'
})
export class SpellingBeeService {
  private wordList23 = [...words23];
  private wordList24 = [...words24];
  private combinedList = words23.concat(words24);
  private currentList: '23' | '24' | 'All';

  private currentWordIndex = -1;
  constructor() {
    this.currentList = 'All';
    this.wordList23 = this.shuffle(this.wordList23);
    this.wordList24 = this.shuffle(this.wordList24);
    this.combinedList = this.shuffle(this.combinedList);
   }

  public getRandomWord(): string {
    switch (this.currentList) {
      case '23':
        return this.wordList23[Math.floor(Math.random() * this.wordList23.length)];
      case '24':
        return this.wordList24[Math.floor(Math.random() * this.wordList24.length)];
      case 'All':
        return this.combinedList[Math.floor(Math.random() * this.combinedList.length)];
    }
  }

  public getNextWord(): string {
    switch (this.currentList) {
      case '23':
        this.currentWordIndex = (this.currentWordIndex + 1) % this.wordList23.length;
        return this.wordList23[this.currentWordIndex];
      case '24':
        this.currentWordIndex = (this.currentWordIndex + 1) % this.wordList24.length;
        return this.wordList24[this.currentWordIndex];
      case 'All':
        this.currentWordIndex = (this.currentWordIndex + 1) % this.combinedList.length;
        return this.combinedList[this.currentWordIndex];
    }
    
  }

  private shuffle(array: any[]) {
    let currentIndex = array.length;
    let randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
