import { Pipe, PipeTransform } from '@angular/core';
import * as wanakana from 'wanakana';

@Pipe({
  name: 'katakana',
  standalone: true
})
export class KatakanaPipe implements PipeTransform {

  transform(hiragana: string): string {
    const katakana = wanakana.toKatakana(hiragana);
    return katakana;
  }

}
