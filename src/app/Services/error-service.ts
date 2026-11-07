import { Service, signal } from '@angular/core';

@Service()
export class ErrorService {
    private _errorMessage = signal<string | null>(null);

    errorMessage = this._errorMessage.asReadonly();

    setError(message: string){
        this._errorMessage.set(message);
    }

    clear(): void{
        
        this._errorMessage.set(null);
    }
}
