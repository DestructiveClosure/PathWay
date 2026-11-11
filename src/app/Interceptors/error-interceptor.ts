import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../Services/error-service';
import { inject } from '@angular/core';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // FINISHED: Going Further: ErrorInterceptor
  const errorServ = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message: string;

      if (error.status === 0) {
        message = 'Network failure.';
      } else if (error.status === 404) {
        message = 'Resource not found';
      } else {
        message = 'An unexpected error occurred';
      }

      errorServ.setError(message);

      return throwError(() => new Error(message));
    })
  );
};