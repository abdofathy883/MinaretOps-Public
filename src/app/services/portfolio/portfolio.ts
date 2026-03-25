import { Injectable, inject } from '@angular/core';
import { Api } from '../global-api/api';
import { Observable } from 'rxjs';
import { ICategory, IPortfolio, LanguageCode } from '../../models/portfolio/i-portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private endpoint: string = 'portfolio';

  private api = inject(Api);

  getAllCategories(languageCode: LanguageCode): Observable<ICategory[]> {
    return this.api.get<ICategory[]>(`${this.endpoint}/categories/${languageCode}`);
  }

  getAllItems(lang: LanguageCode): Observable<IPortfolio[]> {
    return this.api.get<IPortfolio[]>(`${this.endpoint}/items/${lang}`);
  }

  getItemBySlug(slug: string, lang: LanguageCode): Observable<IPortfolio> {
    return this.api.get<IPortfolio>(`${this.endpoint}/item/${slug}/${lang}`);
  }
}
