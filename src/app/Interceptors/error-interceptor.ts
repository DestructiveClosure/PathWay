import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from '../Services/error-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 0) {
        console.log('Network failure. Redirecting...');
      } else if (error.status === 404) {
        console.log('Resource not found:', error.url);
      } else {
        console.log(`Unexpected error`);
      }
      
      return throwError(() => new Error('An error occurred. Please try again.'));
    })
  );
};