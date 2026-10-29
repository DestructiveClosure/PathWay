export type DIFFICULTY = 'easy' | 'moderate' | 'hard';
export type SURFACE = 'paved' | 'gravel' | 'dirt' | 'rock';

export interface Path {
    readonly id: number,
    name: string,
    region: string,
    difficulty: string,
    surface: string,
    dogFriendly: boolean,
    description?: string,
    isFavourite?: boolean
}
