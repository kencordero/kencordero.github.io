import { Component } from '@angular/core';
import { kanji } from 'src/app/shared/data-sets/kanji';

@Component({
    selector: 'app-kanji',
    templateUrl: './kanji.component.html',
    styleUrl: './kanji.component.css',
    standalone: false
})
export class KanjiComponent {
  public letters = kanji

}
