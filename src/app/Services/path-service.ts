import { computed, inject, Service, signal } from '@angular/core';
import { Path } from '../Shared/Models/path';


@Service()
export class PathService {
    

    public guardEnabled = signal<boolean>(true);

    public paths = signal<Path[]>([
        {
            _id: "local-1",
            name: "Little River Corridor",
            description: "A quiet but rigid trail in Tecumseh Ontario"
        },
        {
            _id: "local-2",
            name: "Lakewood Park Trail",
        },
        {
            _id: "local-3",
            name: "Ruscom Shores Trail",
            description: "A relaxed shoreline trail with open views of Lake St. Clair"
        },
        {
            _id: "local-4",
            name: "Greenway Trail",
            description: "A multi-use path connecting parks and neighbourhoods"
        },
        {
            _id: "local-5",
            name: "Devonshire",
            description: "An accessible path connecting football fields"
        },
    ]);
    

    pathList = this.paths.asReadonly();
    pathCount = computed(() => this.paths().length);

    private favouriteIds = signal<readonly number[]>([]);
    favouriteCount = computed(() => this.favouriteIds().length);
    // favouriteList = computed(() => this.paths().filter((f) => this.favouriteIds().includes(f._id)));

    


    addPath(p: Path): void {
        this.paths.update((list) => [...list, p]);
    }

    // toggleFavourite(id: number): void{
    //     this.favouriteIds.update((ids) => 
    //         ids.includes(id) ? ids.filter((existing) => existing !== id) : [...ids, id],
    //     )
    // }
    // map() builds a new array, so the signal sees a new reference and notifies its readers.
    updatePath(updated: Path): void {
        this.paths.update((list) => list.map((p) => (p._id === updated._id ? updated : p)));
    }

    

    // Used by the form when editing, Same lookup as getById, named for that purpose.
    getPath(id: string): Path | undefined {
        return this.getById(id);
    }

    // There is no server to hand out ids yet, so a new path gets one more than the largest id.
    // nextId(): number {
    //     return Math.max(0, ...this.paths().map((p) => p.id)) + 1;
    // }

    // isFavourite(id:string): boolean{
    //     return this.favouriteIds().includes(id);
    // }

    getById(id: string): Path | undefined {
        return this.paths().find((path) => path._id === id);
    }

    removePath(id: string): void{
        console.log(`Hello from the RemoveMethod\nThe Path ID: ${id}`)
        this.paths.update(path => path.filter(i => i._id !== id));
    }

    toggleGuard(): void{
       this.guardEnabled.update(enabled => !enabled);
    }
}
