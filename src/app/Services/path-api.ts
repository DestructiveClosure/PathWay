import { effect, inject, Service, Signal, signal } from '@angular/core';
import { PATH_CONFIG } from '../Shared/path-config';
import { Path } from '../Shared/Models/path';
import { PathService } from './path-service';
import { HttpClient, httpResource } from '@angular/common/http';
import { ErrorService } from './error-service';

interface PathsResponse {
    data: Path[]
}

@Service()
export class PathApi {
    protected pathServ = inject(PathService);
    // Inject config file into service
    private config = inject(PATH_CONFIG);
    private errorServ = inject(ErrorService);
    // Inject HTTP Client to fetch Star Wars characters
    protected url = `${this.config.apiBaseUrl}/characters`

    paths = httpResource<PathsResponse>(
        () => `${this.url}`,
        {defaultValue: {data: []}}
    )
    
    private watchPathsError = effect(() => {
        if (this.paths.error()) {
            this.errorServ.setError('Could not load paths.');
        }
    });
    
    
    // HTTPResource

    byId(id: Signal<string>) {
        return httpResource<Path>(() => `${this.url}/${id()}`);
    }

    byIds(ids: Signal<string[]>) {
        return httpResource<PathsResponse>(
            () => ids().length
            ? { url: this.url, params: { by_ids: ids().join(',') } }
            : undefined,
            { defaultValue: { data: [] } }
        );
    }

    
}
