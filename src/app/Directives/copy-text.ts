import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appCopyText]',
  host: {
    '(click)': 'copyText()',
  },
})
export class CopyText {
  appCopyText = input.required<string>();
  
  appCopyTextCopied = output<void>();

  async copyText(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.appCopyText());
      this.appCopyTextCopied.emit();
      console.log('Copy successful');
    } catch (error) {
      console.error('Copy failed:', error);
    }
  }
}