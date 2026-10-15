export type DIFFICULTY = 'easy' | 'moderate' | 'hard';
export type SURFACE = 'paved' | 'gravel' | 'dirt' | 'rock';

export interface Path {
    readonly id: number,
    name: string,
    region: string,
    distanceKm: number,
    elevationGainM: number,
    difficulty: DIFFICULTY,
    surface: SURFACE,
    dogFriendly: boolean,
    description?: string
}
