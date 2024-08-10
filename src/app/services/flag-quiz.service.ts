import { Injectable } from '@angular/core';
import { countryCodes } from 'src/app/shared/data-sets/country-codes';
import { FlagQuestion } from '../quiz/models/flag-question.model';
import * as _ from 'lodash';

const CHOICE_COUNT = 9;

@Injectable({
  providedIn: 'root'
})
export class FlagQuizService {
  question: FlagQuestion = {
    question: '',
    correctAnswer: '',
    options: [],
    result: undefined
  };

  constructor() { }

  public setupQuestion(isInverseQuestion: boolean): FlagQuestion {
    if (isInverseQuestion) {
      let keys = Object.keys(countryCodes);
      let options = _.sampleSize(keys, CHOICE_COUNT);
      const correctAnswer = countryCodes[options[0]];
      let first = _.find(keys, x => countryCodes[x] === correctAnswer) ?? '';
      this.question = {
        question: correctAnswer,
        correctAnswer: first.toLowerCase(),
        options: _.shuffle(options).map(o => o.toLowerCase()),
        result: undefined
      };  
    }
    else {
      let keys = Object.keys(countryCodes);
      let options = _.sampleSize(countryCodes, CHOICE_COUNT);
      const correctAnswer = options[0];
      let first = _.find(keys, x => countryCodes[x] === correctAnswer) ?? '';
      this.question = {
        question: first.toLowerCase(),
        correctAnswer: correctAnswer,
        options: _.shuffle(options),
        result: undefined
      };
    }
    return this.question;
  }

  checkResponse(option: any): boolean {
    return option === this.question.correctAnswer;
  }
}
