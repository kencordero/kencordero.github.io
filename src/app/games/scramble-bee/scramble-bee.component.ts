import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ken-scramble-bee',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './scramble-bee.component.html',
  styleUrl: './scramble-bee.component.css'
})
export class ScrambleBeeComponent {
  public words: string[] = [];
  public currentWord?: string = undefined;
  public scrambledWord?: string[] = undefined;
  public userInput: string = '';
  public message: string = '';
  public acceptedWordSet: Set<string> = new Set<string>();
  public acceptedWords: string[] = [];
  public score: number = 0;

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

  clearFields(): void {
    this.userInput = '';
    this.message = '';
    this.acceptedWordSet.clear();
    this.acceptedWords = [];
    this.score = 0;
  }

  public getRandomWord(): void {
      this.clearFields();
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
      this.message = 'Too short';
      return false;
    }
    if (word.length > 19) {
      this.message = 'Too long';
      return false;
    }
    if (this.acceptedWordSet.has(word)) {
      this.message = 'Already found';
      return false;
    }
    //missing center letter
    const centerLetter = this.scrambledWord![3];
    if (!word.includes(centerLetter)) {
      this.message = 'Missing center letter';
      return false;
    }
    // Check if the word can be formed from the letters of the current word
    const currentWordLetters = this.currentWord.split('');
    for (const letter of word) {
      if (currentWordLetters.indexOf(letter) === -1) {
          this.message = "Bad letters";
          return false; // Letter not found
      }
    }
    // Check if the word exists in the word list
    if (!this.words.includes(word)) {
      this.message = "Not in word list";
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
      this.message = "Pangram! +" + word.length;
      wordScore += 7; // Pangram bonus
    } else {
      this.message = "Good +" + wordScore;
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

  getAllPossibleWords(): string[] {
    if (!this.currentWord) {
      return [];
    }
    const centerLetter = this.scrambledWord![3];
    return this.words.filter(word => 
      word.includes(centerLetter) &&
      this.canFormWordFromLetters(word, this.currentWord!)
    ).sort();
  } 

  canFormWordFromLetters(word: string, letters: string): boolean {
    const letterArray = letters.split('');
    for (const char of word) {
      const index = letterArray.indexOf(char);
      if (index === -1) {
        return false; // Letter not found
      }
      letterArray.splice(index, 1); // Remove the letter to account for duplicates
    }
    return true;
  }
}
