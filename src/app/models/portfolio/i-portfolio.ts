export interface IPortfolio {
    id: number;
    title: string;
    description?: string;
    imageLink?: string;
    imageAltText?: string;
    categoryId?: number;
}

export interface ICategory {
    id: number;
    title: string;
    description?: string;
}