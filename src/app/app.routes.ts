import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about').then((m) => m.About)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact)
  }
];
