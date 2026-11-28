import { Component, inject, input, output, signal } from '@angular/core';
import { Path } from '../../Shared/Models/path';
import { PathService } from '../../Services/path-service';
import { PATH_CONFIG } from '../../Shared/path-config';
import { RouterLink } from '@angular/router';
import { ErrorService } from '../../Services/error-service';
import { CurrencyPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TitlePipe } from '../../Pipe/title-pipe';
import { DescPipe } from '../../Pipe/desc-pipe';
import { DefaultTextPipe } from '../../Pipe/default-text-pipe';
import { CopyText } from '../../Directives/copy-text';
import { AppConfirm } from '../../Directives/app-confirm';
import { HighlightTitle } from '../../Directives/highlight-title';

@Component({
  imports: [RouterLink, TitleCasePipe, DefaultTextPipe, SlicePipe, UpperCasePipe, TitlePipe, DescPipe, CopyText],
  hostDirectives: [{
    directive: HighlightTitle
  }],
  selector: 'app-path-card',
  styleUrl: './path-card.scss',
  templateUrl: './path-card.html',
})
export class PathCard {
    protected config = inject(PATH_CONFIG);
    color = input('', { alias: 'appHighlight' });
    copied = signal(false);

    // Inputs
    path = input.required<Path>();
    isFavourite = input(false);
    even = input.required<boolean>();
    index = input.required<number>();
  
    // Outputs
    selected = output<Path>();
    favouriteToggled = output<number>();
    remove = output<Path>();

    expanded = true;

    protected toggleCard(): void {
      this.selected.emit(this.path());
    }

    // protected toggleFavourite(event: MouseEvent): void {
    //   event.stopPropagation();
    //   this.favouriteToggled.emit(this.path().id);
    // }

    protected hideStats(event: MouseEvent): void{
      event.stopPropagation();
      this.expanded = !this.expanded;
    }

    removePath(event: MouseEvent): void{
      event.stopPropagation();
      this.remove.emit(this.path());
    }
    
    showCopiedNotice(): void {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
    
}
