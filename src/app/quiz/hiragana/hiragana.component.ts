import { Component } from '@angular/core';
import { hiragana } from 'src/app/shared/data-sets/hiragana';
@Component({
    selector: 'ken-hiragana',
    templateUrl: './hiragana.component.html',
    styleUrl: './hiragana.component.css',
    standalone: false
})
export class HiraganaComponent {
  public letters = hiragana;
}