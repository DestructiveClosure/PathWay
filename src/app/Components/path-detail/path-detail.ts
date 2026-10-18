import { Component, computed, inject, input } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-path-detail',
  styleUrl: './path-detail.scss',
  templateUrl: './path-detail.html',
})
export class PathDetail {
  protected pathServ = inject(PathService);

  id = input.required<string>();
  protected path = computed(() => this.pathServ.getById(Number(this.id())));
}
