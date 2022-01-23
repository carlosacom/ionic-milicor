import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isAdult: boolean;
  constructor(
    private router: Router
  ) {
    this.isAdult = false;
  }

  goToCategories() {
    if (this.isAdult) {
      this.router.navigate(['/categories']);
    }
  }
}
