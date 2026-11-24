import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'onClick()',
  },
})
export class AppConfirm {

  // FINISHED: Part 2 - Step 1 - * Creating directive
  appConfirm = input.required<string>();
  confirmed = output<void>();

  onClick(): void {
    if (window.confirm(this.appConfirm())) {
      this.confirmed.emit();
    }
  }
}