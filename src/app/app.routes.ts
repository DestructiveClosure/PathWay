import { Routes } from '@angular/router';
import { NotFound } from './Components/not-found/not-found';
import { PathForm } from './Components/path-form/path-form';
import { authGuard } from './Services/auth-guard';

export const routes: Routes = [
    // Redirect user to paths if they try to go to homepage or an empty path url
    {
        path: '',
        redirectTo: '/paths',
        pathMatch: 'full'
    },
    {
        path: 'paths',
        loadComponent: () => import('./Components/path-list/path-list').then(m => m.PathList)
    },
    // { 
    //     path: 'paths/:id', 
    //     component: PathDetail 
    // },
    {
        path: 'paths/:id',
        loadComponent: () => import('./Components/path-detail/path-detail').then(m => m.PathDetail)
    },
    // { 
    //     path: 'my-paths', 
    //     component: MyPaths 
    // },
    {
        path: 'my-paths',
        loadComponent: () => import('./Components/my-paths/my-paths').then(m => m.MyPaths)
    },
    // {
    //     path: 'favourites',
    //     component: Favourites,
    // },
    {
        path: 'favourites',
        loadComponent: () => import('./Components/favourites/favourites').then(m => m.Favourites)
    },
    // { 
    //     path: 'add', 
    //     component: PathForm 
    // },
    {
        path: 'add',
        loadComponent: () => import('./Components/path-form/path-form').then(m => m.PathForm)
    },
    // { 
    //     path: 'edit/:id', 
    //     component: PathForm, 
    //     canActivate: [authGuard]
    // },
    {
        path: 'edit/:id',
        loadComponent: () => import('./Components/path-form/path-form').then(m => m.PathForm),
        canActivate: [authGuard]
    },
    // {
    //     path: '**',
    //     component: NotFound
    // },
    {
        path: '**',
        loadComponent: () => import('./Components/not-found/not-found').then(m => m.NotFound)
    },
];
