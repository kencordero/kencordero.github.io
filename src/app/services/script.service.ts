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

  correctAnswerCount = 0;
  questionCount = 0;
  totalQuestionCount = 0;


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

  public checkResponse(option: any): boolean {
    this.questionCount++;

    if (option === this.question.correctAnswer) {
      this.letters.splice(this.questionNumber, 1);
      this.correctAnswerCount++;
    } else {
      this.questionNumber++; 
    }

    if (this.questionNumber >= this.letters.length) {
      this.questionNumber = 0;
      shuffle(this.letters);
    }
    return option === this.question.correctAnswer;
  }

  public setup(characterSet: any[]): void {
    console.log('setup', characterSet);
    this.letters = characterSet;
    this.totalQuestionCount = this.letters.length;
    shuffle(this.letters);

    this.correctAnswerCount = 0;
    this.questionCount = 0;
    this.questionNumber = 0;
  }

  public getScore(): number {
    if (this.questionCount === 0) {
      return 0;
    }

    return Math.round(this.correctAnswerCount/this.questionCount*100);
  }

  public getProgress(): number {
    return Math.trunc(this.correctAnswerCount / this.totalQuestionCount * 100);
  }

  public getTotalQuestionCount(): number {
    return this.totalQuestionCount;
  }

  public getQuestionCount(): number {
    return this.questionCount;
  }

  public getCorrectAnswerCount(): number {
    return this.correctAnswerCount;
  }

  public getQuestionNumber(): number {
    return this.questionNumber;
  }
}
