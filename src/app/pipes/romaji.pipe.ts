import { Pipe, PipeTransform } from '@angular/core';
import * as wanakana from 'wanakana';


@Pipe({
  name: 'romaji',
  standalone: true
})
export class RomajiPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const romaji = wanakana.toRomaji(value);
    return romaji;
  }

}
