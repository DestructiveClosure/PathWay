import { Component, inject } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-my-paths',
  styleUrl: './my-paths.scss',
  templateUrl: './my-paths.html',
})
export class MyPaths {
  protected pathServ = inject(PathService);
  

  
}
