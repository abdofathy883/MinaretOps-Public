import { Component, inject, OnInit } from '@angular/core';
import { Packages } from "../../components/packages/packages";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Seo } from '../../services/seo/seo';
import { TranslatePipe } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Packages, RouterLink, TranslatePipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  private route = inject(ActivatedRoute);
  private seoService = inject(Seo);

   ngOnInit(): void {
     const seo = this.route.snapshot.data['seo'];
     this.seoService.applySeo(seo);
   }
}
