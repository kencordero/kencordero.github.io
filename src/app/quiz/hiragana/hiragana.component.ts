import { Component } from '@angular/core';
import { hiragana } from 'src/app/shared/data-sets/hiragana';
import { ScriptComponent } from '../script/script.component';
@Component({
    selector: 'ken-hiragana',
    templateUrl: './hiragana.component.html',
    styleUrl: './hiragana.component.css',
    imports: [ScriptComponent]
})
export class HiraganaComponent {
  public letters = hiragana;
}