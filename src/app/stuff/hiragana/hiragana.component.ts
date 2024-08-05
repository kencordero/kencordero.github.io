import { Component } from '@angular/core';
import { hiragana } from 'src/app/shared/data-sets/hiragana';
@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrl: './hiragana.component.css'
})
export class HiraganaComponent {
  public letters = hiragana;
}