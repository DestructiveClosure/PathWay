import { computed, effect, inject, Service, Signal, signal } from '@angular/core';
import { PATH_CONFIG } from '../Shared/path-config';
import { Path } from '../Shared/Models/path';
import { PathService } from './path-service';
import { httpResource } from '@angular/common/http';
import { ErrorService } from './error-service';

interface DragonBallCharacter {
  id: number;
  name: string;
  description?: string;
  image?: string;
  affiliation?: string;
}

// Interface for the response of the Characters
interface CharacterResponse {
    items: DragonBallCharacter[]
}

function toPath(character: DragonBallCharacter): Path {
  return {
    _id: String(character.id),
    name: character.name,
    description: character.description,
    image: character.image,
    affiliation: character.affiliation,
  };
}

@Service()
export class PathApi {
    protected pathServ = inject(PathService);
    // Inject config file into service
    private config = inject(PATH_CONFIG);
    private errorServ = inject(ErrorService);
    // Inject HTTP Client to fetch Star Wars characters
    // FINISHED: PART 3 - Load API Data
    protected url = `${this.config.apiBaseUrl}/characters`

    // constructor(){
    //     effect(() => {
    //         // Setting characters to the new characters from the response data when value changes / Remove locally
    //         const res = this.paths.value();
    //         this.pathServ.setCharacters(res.data);
    //     })
    // }

    // paths = httpResource<CharacterResponse>(
    //     () => `${this.url}`,
    //     {defaultValue: {data: []}}
    // )
    constructor() {
        effect(() => {
        const response = this.paths.value();
        this.pathServ.setCharacters(response.items.map(toPath));
        });
    }
    paths = httpResource<CharacterResponse>(
        () => this.url,
        { defaultValue: { items: [] } }
    );

    
    
    // HTTPResource

    // byId(id: Signal<string>) {
    //     return httpResource<Path>(() => `${this.url}/${id()}`);
    // }

    byId(id: Signal<string | number | null | undefined>) {
        return httpResource<DragonBallCharacter>(() => {
            const characterId = id();

            if (
            characterId == null ||
            String(characterId).trim() === '' ||
            String(characterId) === 'undefined'
            ) {
            return undefined;
            }

            return `${this.url}/${encodeURIComponent(String(characterId))}`;
        });
    }

    // byIds(ids: Signal<string[]>) {
    //     return httpResource<CharacterResponse>(
    //         () => ids().length
    //         ? { url: this.url, params: { by_ids: ids().join(',') } }
    //         : undefined,
    //         { defaultValue: { data: [] } }
    //     );
    // }

    byIds(ids: Signal<string[]>) {
        return computed(() => {
        const wantedIds = new Set(ids());
        const characters = this.paths.value().items;

        return characters
            .filter(character => wantedIds.has(String(character.id)))
            .map(toPath);
        });
    }

    
}
