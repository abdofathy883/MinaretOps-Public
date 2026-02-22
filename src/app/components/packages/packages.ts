import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  imports: [],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {

  subscribe(){
    window.location.assign("https://wa.me/+966557742801");
  }
}
