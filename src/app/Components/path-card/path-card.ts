import { Component, inject, input, output } from '@angular/core';
import { Path } from '../../Shared/Models/path';
import { PathService } from '../../Services/path-service';
import { PATH_CONFIG } from '../../Shared/path-config';


@Component({
  imports: [],
  selector: 'app-path-card',
  styleUrl: './path-card.scss',
  templateUrl: './path-card.html',
})
export class PathCard {
    protected config = inject(PATH_CONFIG);

    protected city = this.config.defaultCity;
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

    protected toggleFavourite(event: MouseEvent): void {
      event.stopPropagation();
      this.favouriteToggled.emit(this.path().id);
    }

    protected hideStats(event: MouseEvent): void{
      event.stopPropagation();
      this.expanded = !this.expanded;
    }

    removePath(event: MouseEvent): void{
      event.stopPropagation();
      this.remove.emit(this.path());
    }
    
}
