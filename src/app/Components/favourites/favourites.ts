import { Component, computed, inject, input } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { PathCard } from '../path-card/path-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PathCard, RouterLink],
  selector: 'app-favourites',
  styleUrl: './favourites.scss',
  templateUrl: './favourites.html',
})
export class Favourites {
  protected pathServ = inject(PathService);
  
}
