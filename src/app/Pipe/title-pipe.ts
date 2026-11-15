import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceText',
})
export class TitlePipe implements PipeTransform {
  transform(text: string, find: string, replacement: string): string {
    return text?.split(find).join(replacement) ?? '';
  }
}
