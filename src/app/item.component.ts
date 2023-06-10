import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import {Subscription} from 'rxjs';
  
@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>
                <div>Товар: {{product}}</div>
                <div>Цена: {{price}}</div>
                <hr/>
                <a routerLink="details">Информация о товаре</a> |
                <a [routerLink]="['stat']">Статистика </a>
                <hr/>
                <router-outlet></router-outlet>`
})
export class ItemComponent { 
     
  id;
  product;
  price;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute){
         
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = route.queryParams.subscribe(
        (queryParam: any) => {
            this.product = queryParam['product'];
            this.price = queryParam['price'];
        }
    );
}

    // constructor(private route: ActivatedRoute){}
    // ngOnInit() {
    //   this.route.paramMap.pipe(
    //       switchMap(params => params.getAll('id'))
    //   )
    //   .subscribe(data=> this.id = +data);
    // }

}