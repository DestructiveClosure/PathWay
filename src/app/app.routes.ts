import { Routes } from '@angular/router';
import { PathList } from './Components/path-list/path-list';
import { Favourites } from './Components/favourites/favourites';
import { NotFound } from './Components/not-found/not-found';
import { PathDetail } from './Components/path-detail/path-detail';
import { PathForm } from './Components/path-form/path-form';
import { authGuard } from './Services/auth-guard';
import { MyPaths } from './Components/my-paths/my-paths';

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
        path: 'paths/:id', 
        component: PathDetail 
    },
    { 
        path: 'my-paths', 
        component: MyPaths 
    },
    {
        path: 'favourites',
        component: Favourites,
    },
    { 
        path: 'add', 
        component: PathForm 
    },
    { 
        path: 'edit/:id', 
        component: PathForm, 
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: NotFound
    }
];
