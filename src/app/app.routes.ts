import { Routes } from '@angular/router';
import { PathList } from './Components/path-list/path-list';
import { Favourites } from './Components/favourites/favourites';
import { NotFound } from './Components/not-found/not-found';
import { PathByType } from './Components/path-by-type/path-by-type';

export const routes: Routes = [
    // Redirect user to paths if they try to go to homepage or an empty path url
    {
        path: '',
        redirectTo: '/paths',
        pathMatch: 'full'
    },
    {
        path: 'paths',
        component: PathList
    },
    {
        path: 'paths/region/:region',
        component: PathByType
    },
    {
        path: 'favourites',
        component: Favourites,
    },
    {
        path: '**',
        component: NotFound
    }
];
