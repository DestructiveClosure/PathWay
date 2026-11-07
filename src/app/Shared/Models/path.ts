export type DIFFICULTY = 'easy' | 'moderate' | 'hard';
export type SURFACE = 'paved' | 'gravel' | 'dirt' | 'rock';

export interface Path {
    _id: string,
    name: string,
    description?: string,
    image?: string,
    isFavourite?: boolean
}

/* 
Matt's Repo:

https://github.com/mathewhaug/BreweryFinderMad307

https://starwars-databank-server.onrender.com/api/v1/characters

_id	string	The unique id of the character
name	string	The name of the character
description	string	The description of the character
image	string	Link to the character's image

*/