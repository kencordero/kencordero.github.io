import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ken-scramble-bee',
  imports: [DecimalPipe, FormsModule, UpperCasePipe],
  templateUrl: './scramble-bee.component.html',
  styleUrl: './scramble-bee.component.css'
})
export class ScrambleBeeComponent {
  private _snackBar = inject(MatSnackBar);

  public words: string[] = [];
  public currentWord?: string = undefined;
  public scrambledWord?: string[] = undefined;
  public userInput: string = '';
  public message: string = '';
  public acceptedWordSet: Set<string> = new Set<string>();
  public acceptedWords: string[] = [];
  public score: number = 0;
  public totalWords: string[] = [];
  public maxScore?: number;
  public isDone: boolean = false;

  constructor() {
    console.log('isDone initialized to false');
    this.loadWordList();
  }

  public loadWordList() {
    fetch('assets/words_alpha.txt')
      .then(response => response.text())
      .then(text => {
        this.words = text.split('\n').map(word => word.trim()).filter(word => 
          word.length > 3 && 
          word.length < 20 &&
          !word.includes('s'));
      })
      .catch(error => console.error('Error loading word list:', error));
  }

  clearFields(): void {
    this.userInput = '';
    this.message = '';
    this.acceptedWordSet.clear();
    this.acceptedWords = [];
    this.score = 0;
    this.totalWords = [];
    this.maxScore = undefined;
    this.isDone = false;
  }

  public getRandomWord(): void {
      this.clearFields();
      const wordList = this.filterWordsByUniqueLetters(7);
      const randomIndex = Math.floor(Math.random() * wordList.length);
      this.currentWord = wordList[randomIndex];
      const unique = this.getUniqueLetters(this.currentWord);

      let scrambled: string = this.scrambleWord(Array.from(unique).join(''));
      
      // Ensure the scrambled word is different from the original
      while (scrambled === this.currentWord) {
        scrambled = this.scrambleWord(Array.from(unique).join(''));
      }

      // get letters from the set
      this.scrambledWord = scrambled.split('');
      console.log(`Word: ${this.currentWord}`);
      this.getAllPossibleWords();
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

  public testWord(): boolean {
    this.message = ' ';
    const word = this.userInput?.toLowerCase().trim();
    this.userInput = '';
    if (!this.currentWord) {
      this.message = 'No current word';
      return false;
    }
    if (word.length < 4) {
      this._snackBar.open('Too short', '',  { duration: 2000 });
      //this.message = 'Too short';
      return false;
    }
    if (word.length > 19) {
      this._snackBar.open('Too long', '',  { duration: 2000 });
      //this.message = 'Too long';
      return false;
    }
    if (this.acceptedWordSet.has(word)) {
      this._snackBar.open('Already found', '',  { duration: 2000 });
      //this.message = 'Already found';
      return false;
    }
    //missing center letter
    const centerLetter = this.scrambledWord![3];
    if (!word.includes(centerLetter)) {
      this._snackBar.open('Missing center letter', '',  { duration: 2000 });
      //this.message = 'Missing center letter';
      return false;
    }
    // Check if the word can be formed from the letters of the current word
    const currentWordLetters = this.currentWord.split('');
    for (const letter of word) {
      if (currentWordLetters.indexOf(letter) === -1) {
          this._snackBar.open('Bad letters', '',  { duration: 2000 });
          //this.message = "Bad letters";
          return false; // Letter not found
      }
    }
    // Check if the word exists in the word list
    if (!this.words.includes(word)) {
      this._snackBar.open('Not in word list', '',  { duration: 2000 });
      //this.message = "Not in word list";
      return false;
    }
      
    let wordScore = 0;
    // Word is valid
    if (word.length === 4) {
      wordScore += 1;
    } else {
      wordScore += word.length;
    }

    if (this.isPangram(word)) {
      wordScore += 7
      this._snackBar.open('Pangram! +' + wordScore, '',  { duration: 2000 });
      //this.message = "Pangram! +" + word.length;
    } else {
      this._snackBar.open('Good! +' + wordScore, '',  { duration: 2000 });
      //this.message = "Good +" + wordScore;
    }
    
    this.score += wordScore;

    this.acceptedWordSet.add(word);
    this.acceptedWords.push(word);
    
    // keep the list sorted
    this.acceptedWords.sort();
    
    return true;
  } 

  isPangram(word: string): boolean {
    if (!this.currentWord) {
      return false;
    }
    const uniqueLettersInCurrentWord = this.getUniqueLetters(this.currentWord);
    const uniqueLettersInWord = this.getUniqueLetters(word);
    return uniqueLettersInCurrentWord.size === uniqueLettersInWord.size && 
           [...uniqueLettersInCurrentWord].every(letter => uniqueLettersInWord.has(letter));
  }

  getWordScore(word: string): number {
    let wordScore = 0;
    if (word.length === 4) {
      wordScore += 1;
    } else {
      wordScore += word.length;
    }
    if (this.isPangram(word)) {
      wordScore += 7; // Pangram bonus
    }
    return wordScore;   
  }

  getAllPossibleWords(): void {
    if (!this.currentWord) {
      return;
    }
    const centerLetter = this.scrambledWord![3];
    this.totalWords = this.words.filter(word => 
      word.includes(centerLetter) &&
      this.canFormWordFromLetters(word, this.currentWord!)
    ).sort();

    for (const word of this.totalWords) {
      this.maxScore = (this.maxScore || 0) + this.getWordScore(word);
    }
  } 

  canFormWordFromLetters(word: string, letters: string): boolean {
    const letterArray = letters.split('');
    for (const char of word) {
      if (letterArray.indexOf(char) === -1) {
        return false; // Letter not found
      }
    }
    return true;
  }

  showAllWords(): void {
    this.isDone = true;
    console.log('isDone set to true');
    
    this.acceptedWords = [...this.totalWords];
  }

  scramble(): void {
    if (!this.currentWord) {
      return;
    }
    const centerLetter = this.scrambledWord![3];

    // scramble all letters but the center letter
    let letters = this.scrambledWord!.filter((_, index) => index !== 3);
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    letters.splice(3, 0, centerLetter); // reinsert center letter at index 3
    this.scrambledWord = letters;   
  }
}
