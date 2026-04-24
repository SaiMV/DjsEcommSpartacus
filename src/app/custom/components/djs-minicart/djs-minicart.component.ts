import { Component, OnInit } from '@angular/core';
import { ICON_TYPE, MiniCartComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs/internal/Observable';
import {  map } from 'rxjs/operators'

@Component({
  selector: 'djs-minicart',
  templateUrl: './djs-minicart.component.html',
  styleUrls: ['./djs-minicart.component.scss']
})
export class DjsMinicartComponent extends MiniCartComponent {
  iconTypes = ICON_TYPE;

  quantity$: Observable<number> = this.activeCartService.getActive().pipe(
    map((cart)=>cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string> = this.activeCartService.getActive().pipe(
    map((cart)=>cart.totalPrice?.formattedValue?.toString()||'0')
  ); 

}