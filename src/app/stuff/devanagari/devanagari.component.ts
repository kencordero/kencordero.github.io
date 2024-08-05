import { Component } from '@angular/core';
import { devanagari } from 'src/app/shared/data-sets/devanagari';

@Component({
  selector: 'app-devanagari',
  templateUrl: './devanagari.component.html',
  styleUrl: './devanagari.component.css'
})
export class DevanagariComponent {
  public letters = devanagari;
}
