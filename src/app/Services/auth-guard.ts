import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PathService } from './path-service';

export const authGuard: CanActivateFn = (route, state) => {
  const pathServ = inject(PathService);
  const router = inject(Router);

  if(pathServ.guardEnabled()){
    return true;
  }
  return router.parseUrl('/')
};
