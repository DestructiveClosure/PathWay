import { Injectable, Service, signal } from '@angular/core';

@Service()
export class ErrorService {
    // FINISHED: Going Further
    private errMessage = signal<string | null>(null);

    errorMessage = this.errMessage.asReadonly();

    setError(message: string){
        this.errMessage.set(message);
    }

    clear(): void{
        this.errMessage.set(null);
    }
}
