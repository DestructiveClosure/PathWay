import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PathService } from './Services/path-service';
import { LoadingService } from './Services/loading-service';
import { ErrorService } from './Services/error-service';
import { SavedServices } from './Services/saved-services';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Star Wars Characters');
  protected pathServ = inject(PathService);
  protected loading = inject(LoadingService);
  protected errorServ = inject(ErrorService);
  protected savedServ = inject(SavedServices);
  protected guard = this.pathServ.guardEnabled;

  toggleLock(){
    this.pathServ.toggleGuard();
  }
  protected favouriteLength = computed(
    () => this.savedServ.getSavedIds().length
  );

  // favouriteLength = this.pathServ.favouriteCount;

}
