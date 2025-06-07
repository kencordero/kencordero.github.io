import { Component, OnInit } from '@angular/core';
import { FlagQuizService } from '../../services/flag-quiz.service';
import { FlagQuestion } from '../models/flag-question.model';

@Component({
    selector: 'app-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.css'],
    standalone: false
})
export class FlagsComponent implements OnInit {
  isInverseQuestion = true;
  question: FlagQuestion;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private flagService: FlagQuizService) { 
    this.question = this.flagService.setupQuestion(this.isInverseQuestion);
  }

  ngOnInit(): void {
  }

  onNextQuestion() {
    this.result = undefined;
    this.optionSelected = undefined;
    this.question = this.flagService.setupQuestion(this.isInverseQuestion);
  }  

  onOptionSelected(option: string) {
    this.optionSelected = option;
    this.result = this.flagService.checkResponse(option);
    setTimeout(() => this.onNextQuestion(), 2_000);
  }
}
