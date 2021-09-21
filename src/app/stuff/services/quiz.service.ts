import { Injectable } from '@angular/core';
import { shuffle } from 'src/app/shared/utils';

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
    let wrongAnswers: any[] = countries.filter(c => c.capital !== this.question.correctAnswer).map(c => c.capital);
    shuffle(wrongAnswers);
    wrongAnswers = wrongAnswers.slice(0, CHOICE_COUNT - 1);
    wrongAnswers.unshift(countries[randomCountryId].capital);
    shuffle(wrongAnswers);
    this.question.options = wrongAnswers;
    console.log('question', this.question);
    return this.question;
  }

  checkResponse(option: any): boolean {
    return option === this.question.correctAnswer;
  }
}
