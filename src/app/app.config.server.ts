import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { join } from 'path';
import { readFileSync } from 'fs';

class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    try {
      const filePath = join(process.cwd(), 'dist/MinaretOps-Public/browser/assets/i18n', `${lang}.json`);
      const data = JSON.parse(readFileSync(filePath, 'utf8'));
      return of(data);
    } catch {
      return of({});
    }
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideTranslateService({
      lang: 'ar',
      fallbackLang: 'ar',
      loader: { provide: TranslateLoader, useClass: ServerTranslateLoader }
    })
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
