import { effect, inject, Service, Signal, signal } from '@angular/core';
import { PATH_CONFIG } from '../Shared/path-config';
import { Path } from '../Shared/Models/path';
import { PathService } from './path-service';
import { httpResource } from '@angular/common/http';
import { ErrorService } from './error-service';
// Interface for the response of the Characters
interface CharacterResponse {
    data: Path[]
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

    constructor(){
        effect(() => {
            // Setting characters to the new characters from the response data when value changes / Remove locally
            const res = this.paths.value();
            this.pathServ.setCharacters(res.data);
        })
    }

    paths = httpResource<CharacterResponse>(
        () => `${this.url}`,
        {defaultValue: {data: []}}
    )

    
    
    // HTTPResource

    byId(id: Signal<string>) {
        return httpResource<Path>(() => `${this.url}/${id()}`);
    }

    byIds(ids: Signal<string[]>) {
        return httpResource<CharacterResponse>(
            () => ids().length
            ? { url: this.url, params: { by_ids: ids().join(',') } }
            : undefined,
            { defaultValue: { data: [] } }
        );
    }

    
}
