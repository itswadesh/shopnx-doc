import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  storeFrontFeatures: any[];
  constructor() { }

  ngOnInit() {

    this.storeFrontFeatures = [
      { h2: 'MEAN', p: 'The MEAN Stack ecommerce with Material Design' }
      , { h2: 'Angular', p: 'A whole ecommerce application created using Angular as front end' }
      , { h2: 'NodeJS', p: 'The backend (server side) is backed with the awesome NodeJS framework for better speed and wide extensions support with a very large community base' }
      , { h2: 'MongoDB', p: 'The document based No_SQL database used for faster communication and more efficiency' }
      , { h2: 'Modular', p: 'Industry standard application module structure' }
      , { h2: 'Single Page', p: 'SPA(Single Page App) created with the power of Angular' }
      , { h2: 'One Page Checkout', p: 'Instant and single page advance checkout system' }
      , { h2: 'Acive/Inactive', p: 'Option to save inactive product for publishing later' }
      , { h2: 'Product Variants', p: 'Option to add multiple variants of a single product with different price, size and image' }
      , { h2: 'Product Features', p: 'Additional product details in key/value list' }
      , { h2: 'Featured Product Details', p: 'More product details in key/value list which need to be highlighted in the product details page' }
      , { h2: 'Product Category', p: 'Category wise product details' }
      , { h2: 'Filters', p: 'Advanced features like Multiple brands selector, Prodcut type filter, price slider' }
      , { h2: 'OAUTH', p: 'Integrated social media login' }
      , { h2: 'Passwords', p: 'Reset and Change Password option' }
      , { h2: 'Load More', p: 'Load more products on request' }
      , { h2: 'Contact Form', p: 'Email service for queries/suggestions/grievances through popup contact form' }
    ];
  }

}
