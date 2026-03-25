import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LanguageService } from '../../services/languages/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageCode } from '../../models/portfolio/i-portfolio';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
  isMenuOpen = false;
  isLanguageMenuOpen = false;
  activeSection = 'home';
  currentLang : LanguageCode = LanguageCode.ar; // or get from your language service

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.currentLang = this.langService.currentLang();
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  switchLanguage(lang: LanguageCode) {
    this.currentLang = lang;
    this.isLanguageMenuOpen = false;
    // Your existing language switch logic
    this.langService.setLang(lang);
  }

  getCurrentLangLabel(lang: number) : string {
    if (lang == 0) {
      return 'AR';
    } else {
      return 'EN';
    }
  }
}
