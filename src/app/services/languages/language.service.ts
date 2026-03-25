import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../models/portfolio/i-portfolio';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  init() {
    const defaultLang = LanguageCode.ar.toString();

    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('lang') ?? defaultLang;
      this.translate.use(saved);
      document.documentElement.lang = saved;
      const dir = saved === LanguageCode.ar.toString() ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.body.dir = dir;
    } else {
      this.translate.use(defaultLang);
    }
  }

  setLang(lang: LanguageCode) {
    let newLang;
    if (lang == 0) {
      newLang = 'ar';
    } else {
      newLang = 'en'
    }
    this.translate.use(newLang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', newLang);
      document.documentElement.lang = newLang;
      const dir = lang === LanguageCode.ar ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.body.dir = dir;
    }
  }

  currentLang(): LanguageCode {
    const lang = this.translate.getCurrentLang();
    if (lang === 'ar') {
      return LanguageCode.ar;
    }
    else {
      return LanguageCode.en
    }
  }
}
