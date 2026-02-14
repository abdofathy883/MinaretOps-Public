import { Component, inject, OnInit } from '@angular/core';
import { Packages } from "../../components/packages/packages";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Seo } from '../../services/seo/seo';

@Component({
  selector: 'app-home',
  imports: [Packages, RouterLink],
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
