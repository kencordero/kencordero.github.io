import { Component, OnInit } from '@angular/core';
import { countries } from './countries';

const CHOICE_COUNT = 9;

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent implements OnInit {
  countries: any[] = countries;
  question: any = {};
  result: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    this.setupQuestion();
  }

  setupQuestion() {
    this.result = undefined;
    const randomCountryId = Math.floor(Math.random() * countries.length);
    this.question.country = countries[randomCountryId].name;
    this.question.correctAnswer = countries[randomCountryId].capital;
    let wrongAnswers: any[] = countries.filter(c => c.name !== this.question.country);
    this.shuffle(wrongAnswers);
    wrongAnswers = wrongAnswers.slice(0, CHOICE_COUNT - 1);
    wrongAnswers.unshift(countries[randomCountryId]);
    this.shuffle(wrongAnswers);
    this.question.options = wrongAnswers;
  }

  shuffle(array: any[]): void {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  checkResponse(option: any): void {
    this.result = option.capital === this.question.correctAnswer;
  }
}
