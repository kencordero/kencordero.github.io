import { Injectable } from '@angular/core';
import { countryCodes } from 'src/app/shared/data-sets/country-codes';
import { FlagQuestion } from '../models/flag-question.model';
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
    var keys = Object.keys(countryCodes);
    var options = _.sampleSize(countryCodes, 9);
    const correctAnswer = options[0];
    var first = _.find(keys, x => countryCodes[x] === correctAnswer) ?? '';
    this.question = {
      question: first.toLowerCase(),
      correctAnswer: correctAnswer,
      options: _.shuffle(options),
      result: undefined
    };
    return this.question;
  }

  checkResponse(option: any): boolean {
    return option === this.question.correctAnswer;
  }
}
