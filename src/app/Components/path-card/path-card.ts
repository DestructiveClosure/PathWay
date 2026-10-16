import { Component, input, output } from '@angular/core';
import { Path } from '../../Shared/Models/path';


@Component({
  imports: [],
  selector: 'app-path-card',
  styleUrl: './path-card.scss',
  templateUrl: './path-card.html',
})
export class PathCard {

    // Inputs
    path = input.required<Path>();
    isFavourite = input(false);
    even = input.required<boolean>();
    index = input.required<number>();
  
    // Outputs
    selected = output<Path>();
    favouriteToggled = output<number>();

    expanded = true;

    protected toggleCard(): void {
      this.selected.emit(this.path());
    }

    protected toggleFavourite(event: MouseEvent): void {
      event.stopPropagation();
      this.favouriteToggled.emit(this.path().id);
    }

    protected hideStats(): void{
      this.expanded = !this.expanded;
    }
    
}
