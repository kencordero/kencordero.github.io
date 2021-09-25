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
    let max: number;
    switch (this.operator) {
      case 'addition':
        this.operatorSymbol = '+'
        max = 100;
        break;
      case 'multiplication':
        this.operatorSymbol = 'x';
        max = 12;
        break;
      default:
        max = 0;
        break;
    }
    this.number1 = this.createRandomNumber(1, max);
    this.number2 = this.createRandomNumber(1, max);

    switch (this.operator) {
      case 'addition':
        this.correctAnswer = this.number1 + this.number2;
        break;
      case 'multiplication':
        this.correctAnswer = this.number1 * this.number2;
        break;
    }
    
  }

  createRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
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
