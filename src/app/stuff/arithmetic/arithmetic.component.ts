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
  operator: 'addition' | 'subtraction' | 'multiplication' | 'division';
  operatorSymbol?: '+' | '-' | '×' | '÷';
  response?: string;
  min = 0;
  max = 0;
  
  constructor() {
    this.operator = 'addition';
    this.setupQuestion();    
  }

  setupQuestion() {
    this.response = undefined;
    this.isCorrect = undefined;
    switch (this.operator) {
      case 'addition':
        this.operatorSymbol = '+';
        [this.min, this.max] = [10, 99];
        this.number1 = this.createRandomNumber();
        this.number2 = this.createRandomNumber();
        this.correctAnswer = this.number1 + this.number2;
        break;
      case 'subtraction':
        this.operatorSymbol = '-';
        [this.min, this.max] = [10, 99];
        this.number1 = this.createRandomNumber();
        this.number2 = this.createRandomNumber();
        
        if (this.number2 > this.number1) { // Avoid negative numbers
          [this.number1, this.number2] = [this.number2, this.number1];
        }
        this.correctAnswer = this.number1 - this.number2;
        break;
      case 'multiplication':
        this.operatorSymbol = '×';
        [this.min, this.max] = [0, 12];
        this.number1 = this.createRandomNumber();
        this.number2 = this.createRandomNumber();
        this.correctAnswer = this.number1 * this.number2;
        break;
      case 'division':
        this.operatorSymbol = '÷';
        [this.min, this.max] = [1, 12];
        this.correctAnswer = this.createRandomNumber();
        this.number2 = this.createRandomNumber();
        this.number1 = this.correctAnswer * this.number2;
        break;
    }
  }

  createRandomNumber(): number {
    const min = Math.ceil(this.min);
    const max = Math.floor(this.max + 1);
    return Math.floor(Math.random() * (max - min) + min); //The this.maximum is exclusive and the this.minimum is inclusive
  }

  ngOnInit(): void {
  }

  checkResponse(e: KeyboardEvent) {
    if (e.key !== 'Enter') return;
    this.isCorrect = this.response === this.correctAnswer;
    console.log(this.isCorrect);
    setTimeout(() => this.setupQuestion(), 1500);
  }

  onOperatorChanged(e: any) {
    this.setupQuestion();
  }
}
