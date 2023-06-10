import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-app',
  templateUrl: `home.component.html`,
})
export class HomeComponent {
  item = { id: 11, price: 100, product: '---' };
  constructor(private router: Router) {}

  goToItem(myItem) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    });
  }
}
