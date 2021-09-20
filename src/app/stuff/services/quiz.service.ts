import { Injectable } from '@angular/core';

import { countries } from '../../shared/models/countries';
import { Question } from '../models/question.model';

const CHOICE_COUNT = 9;

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  question: Question = {
    question: '',
    correctAnswer: '',
    options: [],
    result: undefined
  };

  constructor() { }

  public setupQuestion(): Question {
    this.question.result = undefined;
    const randomCountryId = Math.floor(Math.random() * countries.length);
    this.question.question = countries[randomCountryId].name;
    this.question.correctAnswer = countries[randomCountryId].capital;
    let wrongAnswers: any[] = countries.filter(c => c.name !== this.question.question);
    this.shuffle(wrongAnswers);
    wrongAnswers = wrongAnswers.slice(0, CHOICE_COUNT - 1);
    wrongAnswers.unshift(countries[randomCountryId]);
    this.shuffle(wrongAnswers);
    this.question.options = wrongAnswers;
    console.log('question', this.question);
    return this.question;
  }

  private shuffle(array: any[]): void {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  checkResponse(option: any): boolean {
    return option.capital === this.question.correctAnswer;
  }
}
