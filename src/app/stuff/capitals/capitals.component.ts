import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { Question } from '../models/question.model';
import { QuizService } from '../services/quiz.service';

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
  constructor(private quizService: QuizService) { 
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
  }
}
