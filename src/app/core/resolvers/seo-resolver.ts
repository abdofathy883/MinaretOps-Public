import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Seo } from '../../services/seo/seo';
import { ISeoPage } from '../../models/seo/i-seo-page';
import { LanguageService } from '../../services/languages/language.service';

export const seoResolver: ResolveFn<ISeoPage | null> = (route, state) => {
  const seoService = inject(Seo);
  const languageService = inject(LanguageService);

  // currentRoute should match the route param expected by the backend
  // e.g. /about-us or /
  const url = route.url.map(s => s.path).join('/');
  const currentRoute = url ? `/${url}` : '/';
  const cuurentLanguage = languageService.currentLang();
  return seoService.getSeo(currentRoute, cuurentLanguage);
};
