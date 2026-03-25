import { Component, inject } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Seo } from '../../services/seo/seo';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private route = inject(ActivatedRoute);
  private seoService = inject(Seo);

   ngOnInit(): void {
     const seo = this.route.snapshot.data['seo'];
     this.seoService.applySeo(seo);
   }
}
