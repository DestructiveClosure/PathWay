import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PathService } from './Services/path-service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PathWay');
  protected pathServ = inject(PathService);

  protected guard = this.pathServ.guardEnabled;

  toggleLock(){
    this.pathServ.toggleGuard();
  }

  favouriteLength = this.pathServ.favouriteCount;

}
