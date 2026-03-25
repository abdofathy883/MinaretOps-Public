import { Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
