import { Routes } from '@angular/router';
import { seoResolver } from './core/resolvers/seo-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    resolve: { seo: seoResolver }
    // data: { animation: 'HomePage' }
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    resolve: { seo: seoResolver }
    // data: { animation: 'AboutPage' }
  },
  {
    path: 'our-services',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
    resolve: { seo: seoResolver }
    // data: { animation: 'ServicesPage'}
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    resolve: { seo: seoResolver }
    // data: { animation: 'ContactPage' }
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
    resolve: { seo: seoResolver }
  },
  {
    path: 'portfolio/:slug',
    loadComponent: () => import('./pages/portfolio-item/portfolio-item').then((m) => m.PortfolioItem),
    // resolve: { seo: seoResolver }
  }
];
