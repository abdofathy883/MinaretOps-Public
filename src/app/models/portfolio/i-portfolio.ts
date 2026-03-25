export interface IPortfolio {
  id: number;
  slug: string;
  publishedAt: Date;
  imageLink?: string;
  categoryId?: number;
  categoryName: string;
  translations: IPortfolioTranslation[];
}

export interface IPortfolioTranslation {
  id: number;
  title: string;
  description?: string;
  imageAltText?: string;
  languageCode: LanguageCode;
  portfolioItemId: number;
}

export interface ICategory {
  id: number;
  portfolioItems: IPortfolio[];
  translations: ICategoryTranslation[];
}

export interface ICategoryTranslation {
    id: number;
    title: string;
    description?: string;
    languageCode: LanguageCode;
    categoryId: number;
}

export enum LanguageCode {
  ar = 0,
  en = 1,
}
