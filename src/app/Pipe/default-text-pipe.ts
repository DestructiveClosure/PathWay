import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultTxt',
})
export class DefaultTextPipe implements PipeTransform {
  transform(value: string | null | undefined, defaultText = 'No description available'): string {
    return value?.trim() ? value : defaultText;
  }
}
