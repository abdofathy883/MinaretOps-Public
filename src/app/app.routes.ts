import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { animation: 'HomePage' }
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    data: { animation: 'AboutPage' }
  },
  {
    path: 'our-services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    data: { animation: 'ServicesPage'}
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: { animation: 'ContactPage' }
  }
];
