import { PortfolioService } from './../../services/portfolio/portfolio';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ICategory, IPortfolio, LanguageCode } from '../../models/portfolio/i-portfolio';
import { LanguageService } from '../../services/languages/language.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Seo } from '../../services/seo/seo';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio implements OnInit, OnDestroy {
  categories: ICategory[] = [];
  items: IPortfolio[] = [];
  isLoading: boolean = false;

  currentLanguage: LanguageCode = LanguageCode.ar;

  private portfolioService = inject(PortfolioService);
  private languageService = inject(LanguageService);
  private translateService = inject(TranslateService);
  private route = inject(ActivatedRoute);
  private seoService = inject(Seo);

  private destroy$ = new Subject<void>();
  
  ngOnInit(): void {
    const seo = this.route.snapshot.data['seo'];
    this.seoService.applySeo(seo);
    this.currentLanguage = this.languageService.currentLang();
    this.loadCategories();
    this.loadItems();
    this.translateService.onLangChange
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.loadCategories();
      this.loadItems();
    });
  }

  ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

  loadCategories() {
    this.portfolioService.getAllCategories(this.currentLanguage).subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Error loading categories =>', err);
      }
    });
  }

  loadItems() {
    this.isLoading = true;
    this.portfolioService.getAllItems(this.currentLanguage).subscribe({
      next: (response) => {
        this.items = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error loading items =>', err);
      }
    });
  }
}
