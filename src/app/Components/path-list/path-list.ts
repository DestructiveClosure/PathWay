import { Component, inject, input, output, signal } from '@angular/core';
import { Path } from '../../Shared/Models/path';
import { PathCard } from '../path-card/path-card';
import { PathService } from '../../Services/path-service';

@Component({
  imports: [PathCard],
  selector: 'app-path-list',
  styleUrl: './path-list.scss',
  templateUrl: './path-list.html',
})
export class PathList {

  protected pathServ = inject(PathService);
  protected pathList = this.pathServ.pathList;
  protected pathCount = this.pathServ.pathCount;

  protected favourites = signal<number[]>([]);

  protected onPathOpen(path: Path): void{
    console.log(`Path opened: `, path);
  }

  protected toggleFavourite(id: number): void {
    console.log(`Toggled favourite ${id}`);
  }
}
