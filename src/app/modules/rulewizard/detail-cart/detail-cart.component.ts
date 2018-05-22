import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {
  @Input() cart: any;
  constructor() { }

  ngOnInit() {
  }
  removeCart(item) {
    for (let i = 0; i < this.cart.length; i++) {
      const t = this.cart[i];
      if (t.ruleName == item.ruleName) {
        this.cart.splice(i, 1);
        break;
      }
    }
  }

}
