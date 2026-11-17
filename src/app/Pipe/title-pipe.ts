import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceText',
})
export class TitlePipe implements PipeTransform {
  // https://angular.dev/api/core/PipeTransform - Adding two arguments with a colon
  transform(text: string, find: string, replace: string): string {
    return text?.split(find).join(replace) ?? '';
  }
}
