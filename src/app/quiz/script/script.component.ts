import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question.model';
import { ScriptService } from 'src/app/services/script.service';

@Component({
    selector: 'ken-script',
    templateUrl: './script.component.html',
    styleUrl: './script.component.css',
    standalone: false
})
export class ScriptComponent implements OnInit, OnChanges {
  @Input() characterSet: any[] = []; 
  question: Question | undefined;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private quizService: ScriptService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes)
    this.quizService.setup(changes.characterSet.currentValue);
    this.question = this.quizService.setupQuestion();
  }

  ngOnInit(): void {
    console.log('onInit', this.characterSet);
    this.quizService.setup(this.characterSet);
    this.question = this.quizService.setupQuestion();
  }

  onNextQuestion() {
    this.result = undefined;
    this.optionSelected = undefined;
    this.question = this.quizService.setupQuestion();
  }  

  onOptionSelected(option: string) {
    console.log('option selected', option);
    this.optionSelected = option;
    this.result = this.quizService.checkResponse(option);
    setTimeout(() => this.onNextQuestion(), 2_000);
  }

  progress(): number {
    return this.quizService.getProgress();
  }

  totalQuestionCount(): number {
    return this.quizService.getTotalQuestionCount();
  }

  correctAnswerCount(): number {
    return this.quizService.getCorrectAnswerCount();
  }

  questionNumber(): number {
    return this.quizService.getQuestionNumber();
  }

  score(): number {
    return this.quizService.getScore();
  }

  questionCount(): number {
    return this.quizService.getQuestionCount();
  }
}