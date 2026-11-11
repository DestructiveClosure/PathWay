import { Component, computed, inject, input, OnInit } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { Router, RouterLink } from '@angular/router';
import { PathApi } from '../../Services/path-api';

@Component({
  imports: [RouterLink],
  selector: 'app-path-detail',
  styleUrl: './path-detail.scss',
  templateUrl: './path-detail.html',
})
export class PathDetail {

  
  protected pathServ = inject(PathService);
  private router = inject(Router);
  private api = inject(PathApi);
  

  id = input.required<string>();
  // protected path = computed(() => this.pathServ.getById(this.id()));
  path = this.api.byId(this.id);
  

  protected onDelete(id: string): void {
    this.pathServ.removePath(id);
    this.router.navigate(['/paths']);
  }
}
