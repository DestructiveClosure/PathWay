import { computed, Service, signal } from '@angular/core';

@Service()
export class LoadingService {
    private requestCount = signal(0);

    isLoading = computed(() => this.requestCount() > 0);

    // Increasing count
    increase(): void{
        this.requestCount.update(count => count + 1)
    }
    // Decreasing count (prevents count from going below 0)
    decrease(): void{
        this.requestCount.update(count => Math.max(0, count - 1));
    }
}
