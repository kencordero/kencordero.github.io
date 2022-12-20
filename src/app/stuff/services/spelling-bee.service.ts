import { Injectable } from '@angular/core';
import { words } from 'src/app/shared/data-sets/words';

@Injectable({
  providedIn: 'root'
})
export class SpellingBeeService {
  private wordList = words;
  constructor() {
    this.wordList = this.shuffle(this.wordList);
   }

  public getRandomWord(): string {
    return this.wordList[Math.floor(Math.random() * this.wordList.length)];
  }

  // public function* getNextWord() {
  //   for (let word of this.wordList) {
  //     yield word;
  //   }
  // }

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
