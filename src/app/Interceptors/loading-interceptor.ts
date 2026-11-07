import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../Services/loading-service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
    let loadingServ = inject(LoadingService);
    loadingServ.increase();
    return next(req).pipe(
        finalize(() => loadingServ.decrease()),
    );
};
