import { Component, input, output } from '@angular/core';
import { Path } from '../../Shared/Models/path';
import { PathCard } from '../path-card/path-card';

@Component({
  imports: [PathCard],
  selector: 'app-path-list',
  styleUrl: './path-list.scss',
  templateUrl: './path-list.html',
})
export class PathList {
  
  

  protected pathList: Path[] = [
    {
      id: 1,
      name: "Little River Corridor",
      region: "Tecumseh",
      distanceKm: 11,
      elevationGainM: 2,
      difficulty: 'easy',
      surface: 'paved',
      dogFriendly: true,
      description: "A quiet but rigid trail in Tecumseh Ontario"
    },
    {
      id: 2,
      name: "Lakewood Park Trail",
      region: "Tecumseh",
      distanceKm: 3.5,
      elevationGainM: 5,
      difficulty: 'easy',
      surface: 'paved',
      dogFriendly: true,
    },
    {
      id: 3,
      name: "Ruscom Shores Trail",
      region: "St. Clair Beach",
      distanceKm: 4.2,
      elevationGainM: 3,
      difficulty: 'easy',
      surface: 'gravel',
      dogFriendly: true,
      description: "A relaxed shoreline trail with open views of Lake St. Clair"
    },
    {
      id: 4,
      name: "Greenway Trail",
      region: "Windsor",
      distanceKm: 8,
      elevationGainM: 6,
      difficulty: 'moderate',
      surface: 'dirt',
      dogFriendly: true,
      description: "A multi-use path connecting parks and neighbourhoods"
    },
    {
      id: 5,
      name: "McAuliffe Woods Trail",
      region: "LaSalle",
      distanceKm: 2.3,
      elevationGainM: 12,
      difficulty: 'moderate',
      surface: 'rock',
      dogFriendly: true,
      description: "A shaded woodland path with uneven sections and gentle turns"
    },
    {
      id: 6,
      name: "Heritage Trail",
      region: "Amherstburg",
      distanceKm: 6.5,
      elevationGainM: 4,
      difficulty: 'hard',
      surface: 'gravel',
      dogFriendly: false,
      description: "A longer route through green spaces with a few challenging sections"
    },
  ];

  protected onPathOpen(path: Path): void{
    console.log(`Path opened: `, path);
  }

  protected toggleFavourite(id: number): void{
    console.log(`Toggled favourite`)
  }
}
