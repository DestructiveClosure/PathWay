import { effect, Injectable, signal } from '@angular/core';
import { PathApi } from './path-api';

@Injectable({ providedIn: 'root' })
export class SavedServices {

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
    // For debugging
    public debugSavedIds(): string[] {
        return this.savedIds();
    }
    // For favourites page
    getSavedIds(): string[] {
        return this.savedIds();
    }

    
}
