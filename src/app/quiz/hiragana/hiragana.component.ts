import { Component, ChangeDetectionStrategy } from '@angular/core';
import { hiragana } from 'src/app/shared/data-sets/hiragana';
import { ScriptComponent } from '../script/script.component';
@Component({
    selector: 'ken-hiragana',
    templateUrl: './hiragana.component.html',
    styleUrl: './hiragana.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ScriptComponent]
})
export class HiraganaComponent {
  public letters = hiragana;
}