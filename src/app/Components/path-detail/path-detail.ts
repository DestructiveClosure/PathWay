import { Component, computed, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { PathService } from '../../Services/path-service';
import { Router, RouterLink } from '@angular/router';
import { PathApi } from '../../Services/path-api';
import { SavedServices } from '../../Services/saved-services';

@Component({
  imports: [RouterLink],
  selector: 'app-path-detail',
  styleUrl: './path-detail.scss',
  templateUrl: './path-detail.html',
})
export class PathDetail implements OnInit, OnDestroy {

  
  protected pathServ = inject(PathService);
  private router = inject(Router);
  private api = inject(PathApi);

  private savedServ = inject(SavedServices);

  private start = Date.now();
  id = input.required<string>();
  // protected path = computed(() => this.pathServ.getById(this.id()));
  path = this.api.byId(this.id);
  private opened = 0;





  constructor(){
    // this.opened = Date.now();
    // const path = this.pathServ.getById(this.id());
    // console.log('[lifecycle] path:', path);
    // console.log(`[lifecycle] opened: ${path?.name ?? 'Unknown'}`);
  }
  /* 
  Part 4 ngOnInit & ngOnDestroy
   */
  ngOnInit(): void {
    this.opened = Date.now();
    const path = this.pathServ.getById(this.id());
    console.log('[lifecycle] path:', path);
    console.log(`[lifecycle] opened: ${path?.name ? path.name : 'Unknown'}`);
  }

  ngOnDestroy(): void {
    const path = this.pathServ.getById(this.id());
    const sec = Math.round((Date.now() - this.opened) / 1000);
    console.log(`[lifecycle] closed: ${path?.name ? path.name : 'Unknown'} after ${sec} seconds.`)
  }
  

  protected savedChar = signal<boolean>(false);

  // FINISHED: Part 3: Creating isSaved method with computed from angular to save id into savedService Array of saved objects
  protected isSaved = computed(() =>
    this.savedServ.isSaved(this.id())
  );


  protected toggleSaved(): void {
    this.savedServ.toggle(this.id());
    console.log('Saved IDs:', this.savedServ.getSavedIds());
    console.log('Current ID saved?', this.savedServ.isSaved(this.id()));
  }

  protected onDelete(id: string): void {
    this.pathServ.removePath(id);
    this.router.navigate(['/paths']);
  }
}
