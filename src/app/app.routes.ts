import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent)
    },
    {
        path: 'countdown',
        loadComponent: () => import('./features/countdown/countdown.component').then(m => m.CountdownComponent)
    },
    {
        path: 'friends/:id',
        loadComponent: () => import('./features/friends/friend-tribute.component').then(m => m.FriendTributeComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];