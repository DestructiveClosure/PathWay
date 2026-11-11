import { Component, inject, OnInit } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { RouterLink } from '@angular/router';
import { PathApi } from '../../Services/path-api';

@Component({
  imports: [RouterLink],
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
  

  
}
