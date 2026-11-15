import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc',
})
export class DescPipe implements PipeTransform {
   transform(value: string | null | undefined, top = 120): string {
    if (!value) return '';
    return value.length > top
      ? `${value.slice(0, top).trimEnd()}…`
      : value;
  }
}
