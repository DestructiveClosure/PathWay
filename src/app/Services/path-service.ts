import { computed, inject, Service, signal } from '@angular/core';
import { Path } from '../Shared/Models/path';
import { PATH_CONFIG } from '../Shared/path-config';

@Service()
export class PathService {

    // Inject config file into service
    private config = inject(PATH_CONFIG);

    readonly defaultCity = this.config.defaultCity;

    private paths = signal<Path[]>([
        {
            id: 1,
            name: "Little River Corridor",
            region: "Tecumseh",
            difficulty: 'easy',
            surface: 'paved',
            dogFriendly: true,
            description: "A quiet but rigid trail in Tecumseh Ontario"
        },
        {
            id: 2,
            name: "Lakewood Park Trail",
            region: "Tecumseh",
            difficulty: 'easy',
            surface: 'paved',
            dogFriendly: true,
        },
        {
            id: 3,
            name: "Ruscom Shores Trail",
            region: "Windsor",
            difficulty: 'easy',
            surface: 'gravel',
            dogFriendly: true,
            description: "A relaxed shoreline trail with open views of Lake St. Clair"
        },
        {
            id: 4,
            name: "Greenway Trail",
            region: "Windsor",
            difficulty: 'moderate',
            surface: 'dirt',
            dogFriendly: true,
            description: "A multi-use path connecting parks and neighbourhoods"
        },
    ]);

    ;

    pathList = this.paths.asReadonly();
    pathCount = computed(() => this.paths().length);

    private favouriteIds = signal<readonly number[]>([]);
    favouriteCount = computed(() => this.favouriteIds().length);
    favouriteList = computed(() => this.paths().filter((f) => this.favouriteIds().includes(f.id)));
    
    addPath(p: Path): void {
        this.paths.update((list) => [...list, p]);
    }

    toggleFavourite(id: number): void{
        this.favouriteIds.update((ids) => 
            ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
        )
    }

    getPath(id: number): Path | undefined {
        return this.getById(id);
    }

    isFavourite(id:number): boolean{
        return this.favouriteIds().includes(id);
    }

    getById(id: number): Path | undefined {
        return this.paths().find((path) => path.id === id);
    }

    removePath(id: number): void{
        console.log(`Hello from the RemoveMethod\nThe Path ID: ${id}`)
        this.paths.update(path => path.filter(i => i.id !== id));
    }
}
