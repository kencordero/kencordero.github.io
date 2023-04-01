import { Injectable } from '@angular/core';
import { countryCodes } from 'src/app/shared/data-sets/country-codes';
import { shuffle } from 'src/app/shared/utils';
import { Question } from '../models/question.model';
import { FlagQuestion } from '../models/flag-question.model';
import * as _ from 'lodash';

const CHOICE_COUNT = 9;

@Injectable({
  providedIn: 'root'
})
export class FlagQuizService {
  question: FlagQuestion = {
    imageUrl: '',
    correctAnswer: '',
    options: [],
    result: undefined
  };

  constructor() { }

  public setupQuestion(): FlagQuestion {
    var keys = Object.keys(countryCodes);
    var options = _.sampleSize(countryCodes, 9);
    const correctAnswer = options[0];
    var first = _.find(keys, x => countryCodes[x] === correctAnswer) ?? '';
    this.question = {
      imageUrl: first,
      correctAnswer: correctAnswer,
      options: _.shuffle(options),
      result: undefined
    };
    return this.question;
  }

  private getRandomCountry() {
    const keys = Object.keys(countryCodes);
    console.log(keys)
    //const q = countries[keys[keys.length * Math.random() << 0]];
    return keys;
  }

  checkResponse(option: any): boolean {
    console.log('option', option);
    console.log('correctAnswer', this.question.correctAnswer);
    return option === this.question.correctAnswer;
  }
}
