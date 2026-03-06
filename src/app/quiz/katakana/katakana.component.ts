import { Component } from '@angular/core';
import { katakana } from 'src/app/shared/data-sets/katakana';
import { ScriptComponent } from '../script/script.component';

@Component({
    selector: 'ken-katakana',
    templateUrl: './katakana.component.html',
    styleUrl: './katakana.component.css',
    imports: [ScriptComponent]
})
export class KatakanaComponent {
  public letters = katakana;
}
