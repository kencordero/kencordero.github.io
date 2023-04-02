import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { CapitalQuizService } from '../services/capital-quiz.service';

const CHOICE_COUNT = 9;

@Component({
  selector: 'app-capitals',
  templateUrl: './capitals.component.html',
  styleUrls: ['./capitals.component.css']
})
export class CapitalsComponent implements OnInit {
  question: Question;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private quizService: CapitalQuizService) { 
    this.question = this.quizService.setupQuestion();
  }

  ngOnInit(): void {
  }

  onNextQuestion() {
    this.result = undefined;
    this.optionSelected = undefined;
    this.question = this.quizService.setupQuestion();
  }  

  onOptionSelected(option: string) {
    this.optionSelected = option;
    this.result = this.quizService.checkResponse(option);
    setTimeout(() => this.onNextQuestion(), 2_000);
  }
}
