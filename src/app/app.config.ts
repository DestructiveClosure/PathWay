import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { PATH_CONFIG } from './Shared/path-config';
import { loadingInterceptor } from './Interceptors/loading-interceptor';
import { errorInterceptor } from './Interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: PATH_CONFIG,
      useValue: {
        // FINISHED: PART 1
        apiBaseUrl: "https://starwars-databank-server.onrender.com/api/v1"
      }
    },
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor]))
  ],
  
  
};
