import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { FlagQuizService } from '../services/flag-quiz.service';
import { FlagQuestion } from '../models/flag-question.model';

@Component({
  selector: 'app-flag-quiz',
  templateUrl: './flag-quiz.component.html',
  styleUrls: ['./flag-quiz.component.css']
})
export class FlagQuizComponent implements OnInit {
  question: FlagQuestion;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private flagService: FlagQuizService) { 
    this.question = this.flagService.setupQuestion();
  }

  ngOnInit(): void {
  }

  onNextQuestion() {
    this.result = undefined;
    this.optionSelected = undefined;
    this.question = this.flagService.setupQuestion();
  }  

  onOptionSelected(option: string) {
    this.optionSelected = option;
    this.result = this.flagService.checkResponse(option);
    setTimeout(() => this.onNextQuestion(), 2_000);
  }
}
