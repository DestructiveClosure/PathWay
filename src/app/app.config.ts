import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { PATH_CONFIG } from './Shared/path-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: PATH_CONFIG,
      useValue: {
        apiBaseUrl: "https://api.openpathdb.com", defaultCity: "Windsor"
      }
    }
  ],
  
};
