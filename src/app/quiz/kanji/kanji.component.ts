import { Component } from '@angular/core';
import { kanji } from 'src/app/shared/data-sets/kanji';
import { ScriptComponent } from '../script/script.component';

@Component({
    selector: 'ken-kanji',
    templateUrl: './kanji.component.html',
    styleUrl: './kanji.component.css',
    imports: [ScriptComponent]
})
export class KanjiComponent {
  public letters = kanji

}
