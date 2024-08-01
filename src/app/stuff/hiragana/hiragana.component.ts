import { Component } from '@angular/core';
import { HiraganaService } from 'src/app/services/hiragana.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrl: './hiragana.component.css'
})
export class HiraganaComponent {
  question: Question;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private quizService: HiraganaService) { 
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