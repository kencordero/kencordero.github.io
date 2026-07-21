import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FlagQuizService } from '../../services/flag-quiz.service';
import { FlagQuestion } from '../models/flag-question.model';
import { MatButton } from '@angular/material/button';
import { NgClass, LowerCasePipe } from '@angular/common';

@Component({
    selector: 'ken-flags',
    templateUrl: './flags.component.html',
    styleUrls: ['./flags.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatButton, NgClass, LowerCasePipe]
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
