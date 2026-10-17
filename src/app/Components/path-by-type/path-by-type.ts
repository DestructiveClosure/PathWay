import { Component, computed, inject, input } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { PathCard } from '../path-card/path-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PathCard],
  selector: 'app-path-by-type',
  styleUrl: './path-by-type.scss',
  templateUrl: './path-by-type.html',
})
export class PathByType {
  protected pathServ = inject(PathService);
  // Clicking between Windsor, Amherstburg, and Lasalle reuses this same component instance.
  region = input.required<string>();

  protected paths = computed(() =>
    this.pathServ.pathList().filter((p) => p.region === this.region()),
  )
}
