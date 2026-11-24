import { Component, computed, inject, input, signal } from '@angular/core';
import { PathCard } from '../path-card/path-card';
import { RouterLink } from '@angular/router';
import { SavedServices } from '../../Services/saved-services';
import { PathApi } from '../../Services/path-api';

@Component({
  imports: [PathCard, RouterLink],
  selector: 'app-favourites',
  styleUrl: './favourites.scss',
  templateUrl: './favourites.html',
})
export class Favourites {
    protected savedServ = inject(SavedServices);
    protected api = inject(PathApi);

    protected paths = this.api.paths;
    protected savedIds = computed(() => this.savedServ.getSavedIds());

    protected favouritePaths = computed(() => {
      const savedIds = new Set(this.savedIds());

      return this.paths.value().data.filter(path =>
        savedIds.has(path._id)
      );
    });

   
    protected toggleFavourite(id: string): void {
      this.savedServ.toggle(id);
    }
}
