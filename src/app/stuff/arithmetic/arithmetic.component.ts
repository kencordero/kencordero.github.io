import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent implements OnInit {
  correctAnswer?: number;
  number1?: number;
  number2?: number;
  isCorrect?: boolean;
  operator: string;
  operatorSymbol?: string;
  response?: string;
  
  constructor() {
    this.operator = 'addition';
    this.setupQuestion();    
  }

  setupQuestion() {
    this.response = undefined;
    this.isCorrect = undefined;
    let max = 0;
    let min = 0;
    switch (this.operator) {
      case 'addition':
        this.operatorSymbol = '+'
        max = 99;
        min = 10;
        break;
      case 'subtraction':
        this.operatorSymbol = '-';
        max = 99;
        min = 10;
        break;
      case 'multiplication':
        this.operatorSymbol = '×';
        max = 12;
        min = 0;
        break;
    }
    this.number1 = this.createRandomNumber(min, max);
    this.number2 = this.createRandomNumber(min, max);

    switch (this.operator) {
      case 'addition':
        this.correctAnswer = this.number1 + this.number2;
        break;
      case 'subtraction':
        if (this.number2 > this.number1) {
          [this.number1, this.number2] = [this.number2, this.number1];
        }
        this.correctAnswer = this.number1 - this.number2;
        break;
      case 'multiplication':
        this.correctAnswer = this.number1 * this.number2;
        break;
    }
  }

  createRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  ngOnInit(): void {
  }

  checkResponse(e: KeyboardEvent) {
    if (e.key !== 'Enter') return;
    this.isCorrect = this.response == this.correctAnswer;
    console.log(this.isCorrect);
    setTimeout(() => this.setupQuestion(), 1500);
  }

  onOperatorChanged(e: any) {
    this.setupQuestion();
  }
}
