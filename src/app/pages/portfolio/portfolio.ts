import { PortfolioService } from './../../services/portfolio/portfolio';
import { Component, inject, OnInit } from '@angular/core';
import { ICategory, IPortfolio } from '../../models/portfolio/i-portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit{
  categories: ICategory[] = [];
  items: IPortfolio[] = [];

  private portfolioService = inject(PortfolioService);

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
  }

  loadCategories() {
    this.portfolioService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
        console.log('Categories =>', this.categories);
      },
      error: (err) => {
        console.error('Error loading categories =>', err);
      }
    });
  }

  loadItems() {
    this.portfolioService.getAllItems().subscribe({
      next: (response) => {
        this.items = response;
        console.log('Items =>', this.items);
      },
      error: (err) => {
        console.error('Error loading items =>', err);
      }
    });
  }
}
