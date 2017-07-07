import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class OverviewServerComponent implements OnInit {
  serverStructure: String;
  constructor() { }

  ngOnInit() {
    this.serverStructure = `├───api
│   ├───address
│   ├───brand
│   ├───category
│   ├───contact
│   ├───coupon
│   ├───customer
│   ├───feature
│   ├───media
│   ├───order
│   ├───orderHistory
│   ├───pay
│   ├───payment-method
│   ├───product
│   ├───review
│   ├───sendmail
│   ├───shipping
│   ├───upload
│   ├───user
│   └───wishlist
├───auth
│   ├───facebook
│   ├───google
│   ├───local
│   │   └───.git
│   │       ├───hooks
│   │       ├───info
│   │       ├───objects
│   │       │   ├───40
│   │       │   ├───97
│   │       │   ├───info
│   │       │   └───pack
│   │       └───refs
│   │           ├───heads
│   │           └───tags
│   └───twitter
└───components
    └───errors
|   app.ts
|   config.ts
|   routes.ts
|   seed.ts
|   tsconfig.json`;
  }

}
