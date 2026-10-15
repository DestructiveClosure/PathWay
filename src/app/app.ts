import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Path } from './Shared/Models/path';
import { PathList } from './Components/path-list/path-list';

@Component({
  imports: [PathList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PathWay');

  

}
