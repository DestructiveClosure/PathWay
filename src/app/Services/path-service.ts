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
            distanceKm: 11,
            elevationGainM: 2,
            difficulty: 'easy',
            surface: 'paved',
            dogFriendly: true,
            description: "A quiet but rigid trail in Tecumseh Ontario"
        },
        {
            id: 2,
            name: "Lakewood Park Trail",
            region: "Tecumseh",
            distanceKm: 3.5,
            elevationGainM: 5,
            difficulty: 'easy',
            surface: 'paved',
            dogFriendly: true,
        },
        {
            id: 3,
            name: "Ruscom Shores Trail",
            region: "St. Clair",
            distanceKm: 4.2,
            elevationGainM: 3,
            difficulty: 'easy',
            surface: 'gravel',
            dogFriendly: true,
            description: "A relaxed shoreline trail with open views of Lake St. Clair"
        },
        {
            id: 4,
            name: "Greenway Trail",
            region: "Windsor",
            distanceKm: 8,
            elevationGainM: 6,
            difficulty: 'moderate',
            surface: 'dirt',
            dogFriendly: true,
            description: "A multi-use path connecting parks and neighbourhoods"
        },
        {
            id: 5,
            name: "McAuliffe Woods Trail",
            region: "LaSalle",
            distanceKm: 2.3,
            elevationGainM: 12,
            difficulty: 'moderate',
            surface: 'rock',
            dogFriendly: true,
            description: "A shaded woodland path with uneven sections and gentle turns"
        },
        {
            id: 6,
            name: "Heritage Trail",
            region: "Lasalle",
            distanceKm: 6.5,
            elevationGainM: 4,
            difficulty: 'hard',
            surface: 'gravel',
            dogFriendly: false,
            description: "A longer route through green spaces with a few challenging sections"
        },
    ]);

    pathList = this.paths.asReadonly();
    pathCount = computed(() => this.paths().length);

    private favouriteIds = signal<readonly number[]>([]);

    toggleFavourite(id: number): void{
        this.favouriteIds.update((ids) => 
            ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
        )
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
