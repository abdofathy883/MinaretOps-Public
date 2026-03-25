import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslatePipe } from '@ngx-translate/core';
import { Seo } from '../../services/seo/seo';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private route = inject(ActivatedRoute);
  private seoService = inject(Seo);

   ngOnInit(): void {
     const seo = this.route.snapshot.data['seo'];
     this.seoService.applySeo(seo);
   }
}
