import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
import { Path } from '../../Shared/Models/path';
import { PathCard } from '../path-card/path-card';
import { PathService } from '../../Services/path-service';
import { PATH_CONFIG } from '../../Shared/path-config';
import { HttpClient } from '@angular/common/http';
import { PathApi } from '../../Services/path-api';

@Component({
  imports: [PathCard],
  selector: 'app-path-list',
  styleUrl: './path-list.scss',
  templateUrl: './path-list.html',
})
export class PathList implements OnInit {

  protected pathServ = inject(PathService);
  protected pathCount = this.pathServ.pathCount;
  // protected pathList = this.pathServ.pathList;
  private api = inject(PathApi);

  protected pathList = this.api.paths;
  
  ngOnInit(): void {
    console.log(`Characters: ${this.pathList}`)
  }
  
  
  protected favourites = signal<number[]>([]);

  protected onPathOpen(path: Path): void{
    console.log(`Path opened: `, path);
  }

  protected toggleFavourite(id: string): void {
    console.log(`Toggled favourite ${id}`);
  }

  onPathRemove(path: Path): void{
    this.pathServ.removePath(path._id);
  }
}
