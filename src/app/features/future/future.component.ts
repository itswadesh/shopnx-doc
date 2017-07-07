import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {
  futureFeatures: any[];

  constructor() { }

  ngOnInit() {

    this.futureFeatures = [
      { h2: 'Social Media', p: 'Integration of social info profile of each customer' }
      , { h2: 'Backorders', p: 'Shoppers can order an item even if stock is 0' }
      , { h2: 'Additional Payment Methods', p: 'Support for more payment methods e.g. Stripe, Credit Card.' }
      , { h2: 'Inventory Mangement', p: 'The store owner can manage inventory with automated replenishment orders' }
      , { h2: 'SMS Integration', p: 'SMS for each important transaction performed' }
      , { h2: 'Hotkeys', p: 'Keyboard Shortcuts for regular tasks' }
      , { h2: 'Tax Management', p: 'Integrated Tax Manager' }
      , { h2: 'Theming', p: 'Advanced theming support for the whole website' }
      , { h2: 'Static Page Management', p: 'Create and edit static pages, such as Contact, About, or Support.' }
      , { h2: 'Returns and Refunds', p: 'Adminster and manage returns and refunds.' }

    ]

  }

}
