import { Injectable, inject } from '@angular/core';
import { Api } from '../global-api/api';
import { Observable } from 'rxjs';
import { ICategory, IPortfolio } from '../../models/portfolio/i-portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private endpoint: string = 'portfolio';

  private api = inject(Api);

  getAllCategories(): Observable<ICategory[]> {
    return this.api.get<ICategory[]>(`${this.endpoint}/categories`);
  }

  getAllItems(): Observable<IPortfolio[]> {
    return this.api.get<IPortfolio[]>(`${this.endpoint}/items`);
  }
}
