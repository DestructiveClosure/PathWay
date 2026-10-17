import { Component, inject } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { PathCard } from '../path-card/path-card';

@Component({
  imports: [PathCard],
  selector: 'app-favourites',
  styleUrl: './favourites.scss',
  templateUrl: './favourites.html',
})
export class Favourites {
  protected pathServ = inject(PathService);
 
}
