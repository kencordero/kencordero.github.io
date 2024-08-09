import { Component, OnInit } from '@angular/core';
import SpellingBeeService from '../../services/spelling-bee.service';
import { shuffle } from 'src/app/shared/utils';

@Component({
  selector: 'app-spelling-bee',
  templateUrl: './spelling-bee.component.html',
  styleUrls: ['./spelling-bee.component.css']
})
export class SpellingBeeComponent implements OnInit {
  public word?: string;
  public dictionaryEntry: any;
  public definitions: any;
  private voices: SpeechSynthesisVoice[];

  constructor(private api: SpellingBeeService) { 
    const synth = window.speechSynthesis;
    console.log('Synth: ' + synth);
    this.voices = synth.getVoices();
    console.log('Voices: ' + this.voices);
  }

  ngOnInit(): void {
    this.onClickNext();
  }

  onClickNext(): void {
    this.word = this.api.getNextWord();
    console.log('Word: ' + this.word);
    
    this.speak();
    
    // this.dictionaryEntry = null;
    // this.definitions = null;
    
    // this.api.getDictionaryEntry(this.word).subscribe({
    //   next: data => {
    //     this.dictionaryEntry = data;
    //     this.definitions = this.api.extractDefinitions(data);
    //   },
    //   error: () => {
    //     console.log('Could not find definition for ' + this.word);
    //   }
    // });
  }

  speak(): void {
    let utterance = new SpeechSynthesisUtterance(this.word);
    utterance.voice = this.voices[0];
    
    speechSynthesis.speak(utterance);
  }
}
