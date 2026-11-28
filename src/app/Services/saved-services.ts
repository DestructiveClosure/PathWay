import { effect, Injectable, signal } from '@angular/core';
import { PathApi } from './path-api';

@Injectable({ providedIn: 'root' })
export class SavedServices {
    // FINISHED: Part 3: Creating LocalStorage SavedService or Injectable DirectiveAssignment

    // Initializing savedIds array
    private storageKey = 'star-wars-favourites';
    private savedIds = signal<string[]>(this.load());
    

    isSaved(id: string): boolean{
        // checks whether id is in the list returned by this.savedIds()
        return this.savedIds().includes(id);
    }


    toggle(id: string): void {
        // Ternary operator to determine if
        // the id includes the id that is passed in, we will filter that id out of the array, if not we add it
        this.savedIds.update(
            ids =>   
                ids.includes(id) ? 
                ids.filter(savedId => savedId !== id) : 
                [...ids, id])
    }

    constructor() {
        /* 
            Using Angular's effect to store data into localStorage to persist data on refresh
        */
        effect(() => {
            try { localStorage.setItem(this.storageKey, JSON.stringify(this.savedIds())); }
            catch { 
                /* storage full or blocked: keep working in memory */
                console.log('An unexpected error occurred')
            }
        });
    }



    private load(): string[]{
        try{
            return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]')
        }catch{
            return [];
        }
    }

    // For favourites page
    getSavedIds(): string[] {
        return this.savedIds();
    }

    
}
