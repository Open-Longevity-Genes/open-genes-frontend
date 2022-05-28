import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkBlankValue',
})
export class CheckBlankValuePipe implements PipeTransform {
  transform(value: string | number | any[], prepend = '', append = '', replacementValue = '—'): string {
    if (value === undefined || value === null || value === '' || value === []) {
      return replacementValue;
    } else {
      return `${prepend}${value}${append}`;
    }
  }
}
