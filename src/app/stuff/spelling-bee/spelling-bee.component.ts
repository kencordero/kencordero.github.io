import { Component, OnInit } from '@angular/core';
import SpellingBeeService from '../../services/spelling-bee.service';

@Component({
  selector: 'app-spelling-bee',
  templateUrl: './spelling-bee.component.html',
  styleUrls: ['./spelling-bee.component.css']
})
export class SpellingBeeComponent implements OnInit {
  public word?: string;
  public dictionaryEntry: any;
  public definitions: any;

  constructor(private api: SpellingBeeService) { }

  ngOnInit(): void {
    this.onClickNext();
  }

  onClickNext(): void {
    this.word = this.api.getNextWord();
    this.dictionaryEntry = null;
    this.definitions = null;
    
    this.api.getDictionaryEntry(this.word).subscribe({
      next: data => {
        this.dictionaryEntry = data;
        this.definitions = this.api.extractDefinitions(data);
      },
      error: () => {
        console.log('Could not find definition for ' + this.word);
      }
    });
  }
}
