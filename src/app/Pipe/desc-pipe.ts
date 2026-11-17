import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc',
})
export class DescPipe implements PipeTransform {
  // If the string is longer than the limit (120), it takes the first ceil characters
  // removes any trailing whitespace from that cut, and adds an ellipsis
   transform(value: string | null | undefined, ceil = 120): string {
    if (!value) return '';
    return value.length > ceil
      ? `${value.slice(0, ceil).trimEnd()}…`
      : value;
  }
}
