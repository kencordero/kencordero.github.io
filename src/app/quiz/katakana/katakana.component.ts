import { Component } from '@angular/core';
import { katakana } from 'src/app/shared/data-sets/katakana';

@Component({
    selector: 'ken-katakana',
    templateUrl: './katakana.component.html',
    styleUrl: './katakana.component.css',
    standalone: false
})
export class KatakanaComponent {
  public letters = katakana;
}
