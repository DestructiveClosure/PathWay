import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PathService } from './Services/path-service';
import { LoadingService } from './Services/loading-service';
import { ErrorService } from './Services/error-service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Star Wars Characters');
  protected pathServ = inject(PathService);
  protected loading = inject(LoadingService);
  protected errorServ = inject(ErrorService);

  protected guard = this.pathServ.guardEnabled;

  toggleLock(){
    this.pathServ.toggleGuard();
  }

  favouriteLength = this.pathServ.favouriteCount;

}
