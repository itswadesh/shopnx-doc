import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class OverviewClientComponent implements OnInit {
  clientStructure: String;
  constructor() { }

  ngOnInit() {
    this.clientStructure = `├───app
│   ├───account
│   │   ├───cp
│   │   ├───login
│   │   ├───password
│   │   └───profile
│   ├───admin
│   │   ├───address
│   │   ├───brands
│   │   │   └───brand-detail
│   │   ├───categories
│   │   ├───coupons
│   │   │   └───coupon-detail
│   │   ├───dashboard
│   │   ├───features
│   │   │   └───feature-detail
│   │   ├───media
│   │   ├───my-orders
│   │   ├───my-reviews
│   │   ├───order
│   │   │   └───order-content
│   │   ├───product
│   │   │   ├───features
│   │   │   ├───product-detail
│   │   │   └───variants
│   │   ├───reviews
│   │   │   └───review-detail
│   │   ├───shipping
│   │   │   └───shipping-detail
│   │   ├───user
│   │   │   └───user-detail
│   │   └───wishlist
│   ├───home
│   │   ├───banner
│   │   ├───checkout
│   │   ├───featured-products
│   │   ├───home
│   │   ├───megamenu
│   │   ├───news-banner
│   │   ├───owl-carousel
│   │   ├───product
│   │   ├───product-card
│   │   ├───shop
│   │   ├───success
│   │   └───wish-button
│   ├───modal
│   └───shared
│       ├───404
│       ├───address
│       ├───cart-buttons
│       ├───dialogs
│       ├───edit
│       ├───export
│       ├───footer
│       ├───guards
│       ├───header
│       ├───list
│       ├───list-image
│       ├───media
│       ├───oauth-buttons
│       ├───pipes
│       ├───search
│       ├───services
│       └───submit-button
├───assets
│   ├───fashion
│   └───img
└───environments
|   hmr.ts
|   index.html
|   main.ts
|   output.txt
|   polyfills.ts
|   test.ts
|   tsconfig.app.json
|   tsconfig.spec.json
|   typings.d.ts`
  }
}
