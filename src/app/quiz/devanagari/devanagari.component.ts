import { Component } from '@angular/core';
import { devanagari } from 'src/app/shared/data-sets/devanagari';
import { ScriptComponent } from '../script/script.component';

@Component({
    selector: 'ken-devanagari',
    templateUrl: './devanagari.component.html',
    styleUrl: './devanagari.component.css',
    imports: [ScriptComponent]
})
export class DevanagariComponent {
  public letters = devanagari;
}
