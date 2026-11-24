import { Component, inject, OnInit } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { RouterLink } from '@angular/router';
import { PathApi } from '../../Services/path-api';
import { AppConfirm } from '../../Directives/app-confirm';
import { Path } from '../../Shared/Models/path';

@Component({
  imports: [RouterLink, AppConfirm],
  selector: 'app-my-paths',
  styleUrl: './my-paths.scss',
  templateUrl: './my-paths.html',
})
export class MyPaths implements OnInit {
  protected pathServ = inject(PathService);
  protected api = inject(PathApi);

  ngOnInit(): void {
    console.log(`API: `, this.api.paths);
  }
  //  FINISHED: Part 2 - Step 2 - * Emitting the output

  removePath(path: Path): void {
    this.pathServ.removePath(path._id);
  }

  
}
