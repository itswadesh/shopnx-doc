import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  storeBackFeatures: any[];

  constructor() { }

  ngOnInit() {

    this.storeBackFeatures = [
      { h2: 'Manage Backoffice', p: 'Products, Categories, Brand, Order Management from admin panel with easy directives' }
      , { h2: 'Order Management', p: 'Manage Order and Change Status from admin panel' }
      , { h2: 'Product Variants', p: 'Facility for Multiple product variants (size, color, price, image)' }
      , { h2: 'User roles', p: '- Administrator, User, Manager' }
      , { h2: 'Quality Code', p: 'Secure and quality code - Takes care all single page web app standards' }
      , { h2: 'Secure', p: 'Securely built and prevent security attacks' }
      , { h2: 'ReST API', p: 'NodeJS based ReST API architecture' }
      , { h2: 'Date picker', p: 'Integrated material designed date picker for date fields' }
      , { h2: 'Modular Code', p: 'Code is Modular, Maintainable, Well Structured, Easy to customize, Production Ready' }
      , { h2: 'Multivendor', p: 'Different vendors can manage their own products' }
      , { h2: 'Exportable', p: 'Easily export the table as Excel, JSON, txt format' }
    ];
  }

}
