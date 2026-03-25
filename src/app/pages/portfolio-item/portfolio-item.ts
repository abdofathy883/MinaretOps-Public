import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from '../../services/portfolio/portfolio';
import { LanguageService } from '../../services/languages/language.service';
import { TranslateService } from '@ngx-translate/core';
import { IPortfolio, LanguageCode } from '../../models/portfolio/i-portfolio';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-portfolio-item',
  imports: [],
  templateUrl: './portfolio-item.html',
  styleUrl: './portfolio-item.css',
})
export class PortfolioItem implements OnInit, OnDestroy {
  project!: IPortfolio;
  currentLanguage: LanguageCode = LanguageCode.ar;

  private portfolioService = inject(PortfolioService);
  private languageService = inject(LanguageService);
  private translationService = inject(TranslateService);
  private route = inject(ActivatedRoute);

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLang();
    this.loadItem();
    this.translationService.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadItem();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadItem() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (!slug) return;
    this.portfolioService.getItemBySlug(slug, this.currentLanguage).subscribe({
      next: (response) => {
        this.project = response;
        console.log(this.project);
      },
    });
  }
}
