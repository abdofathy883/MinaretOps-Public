import { afterNextRender, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { LanguageService } from './services/languages/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // constructor(private langService: LanguageService) {
  //   this.langService.init();
  // }
  private languageService = inject(LanguageService);
  constructor() {
    afterNextRender(() => {
      this.languageService.init();
    });
  }
}
