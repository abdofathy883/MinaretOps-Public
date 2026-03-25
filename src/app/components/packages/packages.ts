import { Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {

  subscribe(){
    window.location.assign("https://wa.me/+966557742801");
  }
}
