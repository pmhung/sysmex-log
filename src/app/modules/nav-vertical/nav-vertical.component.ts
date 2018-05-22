import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})

export class NavVerticalComponent implements OnInit {

  menuitems: any = [
    { path: '/dashboard', data: { title: 'Dashboard (current)' } },
    { path: '/orders', data: { title: 'Orders' } },
    { path: '/products', data: { title: 'Products' } },
    { path: '/customers', data: { title: 'Customers' } },
    { path: '/reports', data: { title: 'Reports' } },
    { path: '/integrations', data: { title: 'Integrations' } }
  ];
  constructor() { }

  ngOnInit() {

  }


}
