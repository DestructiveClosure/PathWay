import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'isHovered.set(true)',
    '(mouseleave)': 'isHovered.set(false)',
    '[class.title-hovered]': 'isHovered()',
  },
})
export class HighlightTitle {
  protected isHovered = signal(false);
}
