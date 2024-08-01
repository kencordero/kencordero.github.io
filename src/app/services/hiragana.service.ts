import { Injectable } from '@angular/core';
import { Question } from '../stuff/models/question.model';
import { hiragana } from '../shared/data-sets/hiragana';
import { shuffle } from '../shared/utils';

const CHOICE_COUNT = 9;

@Injectable({
  providedIn: 'root'
})
export class HiraganaService {
  question: Question = {
    question: '',
    correctAnswer: '',
    options: [],
    result: undefined
  };

  public setupQuestion(): Question {
    this.question.result = undefined;
    const randomId = Math.floor(Math.random() * hiragana.length);
    this.question.question = hiragana[randomId].kana;
    this.question.correctAnswer = hiragana[randomId].romaji;
    let wrongAnswers: any[] = hiragana.filter(c => c.romaji !== this.question.correctAnswer).map(c => c.romaji);
    shuffle(wrongAnswers);
    wrongAnswers = wrongAnswers.slice(0, CHOICE_COUNT - 1);
    wrongAnswers.unshift(hiragana[randomId].romaji);
    shuffle(wrongAnswers);
    this.question.options = wrongAnswers;
    return this.question;
  }

  checkResponse(option: any): boolean {
    return option === this.question.correctAnswer;
  }
}
