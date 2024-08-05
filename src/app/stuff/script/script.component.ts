import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../models/question.model';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrl: './script.component.css'
})
export class ScriptComponent implements OnInit, OnChanges {
  @Input() characterSet: any[] = []; 
  question: Question | undefined;
  result: boolean | undefined;
  optionSelected: string | undefined;
  constructor(private quizService: ScriptService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
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
    this.optionSelected = option;
    this.result = this.quizService.checkResponse(option);
    setTimeout(() => this.onNextQuestion(), 2_000);
  }
}