import { Injectable } from '@angular/core';
import { Question } from '../stuff/models/question.model';
import { shuffle } from '../shared/utils';

const CHOICE_COUNT = 9;

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  question: Question = {
    question: '',
    correctAnswer: '',
    options: [],
    result: undefined
  };

  public questionNumber = 0;
  public letters: any[] = [];

  public setupQuestion(): Question {
    this.question.result = undefined;
    this.question.question = this.letters[this.questionNumber].key;
    this.question.correctAnswer = this.letters[this.questionNumber].value;
    let wrongAnswers: any[] = this.letters.filter(c => c.value !== this.question.correctAnswer).map(c => c.value);
    shuffle(wrongAnswers);
    wrongAnswers = wrongAnswers.slice(0, CHOICE_COUNT - 1);
    wrongAnswers.unshift(this.letters[this.questionNumber].value);
    shuffle(wrongAnswers);
    this.question.options = wrongAnswers;
    return this.question;
  }

  checkResponse(option: any): boolean {
    if (option === this.question.correctAnswer) {
      this.letters.splice(this.questionNumber, 1);
    } else {
      this.questionNumber++; 
    }

    if (this.questionNumber >= this.letters.length) {
      this.questionNumber = 0;
      shuffle(this.letters);
    }
    return option === this.question.correctAnswer;
  }

  setup(characterSet: any[]): void {
    console.log('setup', characterSet);
    this.letters = characterSet;
    shuffle(this.letters);
  }
}
