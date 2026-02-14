import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Seo } from '../../services/seo/seo';
import { ISeoPage } from '../../models/seo/i-seo-page';

export const seoResolver: ResolveFn<ISeoPage | null> = (route, state) => {
  const seoService = inject(Seo);

  // currentRoute should match the route param expected by the backend
  // e.g. /about-us or /
  const url = route.url.map(s => s.path).join('/');
  const currentRoute = url ? `/${url}` : '/';

  return seoService.getSeo(currentRoute);
};
