import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  topFeatures: any[];
  why: any[];
  newFeatures: any[];

  constructor() { }

  ngOnInit() {
    this.topFeatures = [
      { h: 'PayPal Shopping Cart', p: 'Enter your paypal app ID into settings, add products and start selling with no matter of time. This has got inbuilt multi currency support with curency conversion feature', i: 'assets/images/paypal.png' },
      { h: 'MEAN Stack', p: 'Developed using the most popular MEAN(MongoDB + Express + Angular + Node) which has a RestAPI based architecture with high scallability.', i: 'assets/images/mean.png' },
      { h: 'Authentication', p: 'Inbuilt authentication mechanism with role based user access and user management', i: 'assets/images/user-roles.png' },
      { h: 'Material Design', p: 'Most of the components are based on Google Material designe guidelines which gives you a responsive, bold and accessible design with great amount of user interactivity', i: 'assets/images/material-design.png' },
      { h: 'Emails', p: 'Integration of emails at diffent levels like Order Placement, Forgot/Reset password gives a secure as well as informative feeling', i: 'assets/images/email.png' },
      { h: 'Modular Code', p: 'The modular application structure gives you enormous ability to modify, test and deploy easily', i: 'assets/images/code.png' },
      { h: 'Multivendor', p: 'Support for multiple vendors where each vendor will have their own profile to mange their orders', i: 'assets/images/code.png' }
    ]
    this.why = [
      { h: 'Drag and drop category selection', i: 'playlist_add', c: 'fill: #FF5722' },
      { h: 'Angular Shopping Cart', i: 'shopping_basket', c: 'fill:#DE140E' },
      { h: 'Local + OAUTH login', i: 'lock_outline', c: 'fill: #2196F3' },
      { h: 'Email integration', i: 'email', c: 'fill: #FABD0E' },
      { h: 'PayPal Checkout', i: 'account_balance_wallet', c: 'fill: #795548' },
      { h: 'Material Design', i: 'devices', c: 'fill: #ab47bc' },
      { h: 'Image uploader', i: 'collections', c: 'fill: #8bc34a' },
      { h: 'ReST API based backend', i: 'http', c: 'fill: #26a69a' }
    ]

    this.newFeatures = [
      { h2: 'Reviews', p: 'Product Reviews and Comments' }
      , { h2: 'Ratings', p: 'Product Ratings feature' }
      , { h2: 'Coupons', p: 'Ability yo manage discount coupons on cart total', i: 'settings' }
      , { h2: 'Media Management', p: 'With integrated drag and drop image upload its easy to manage the images for the whole shop' }
      , { h2: 'Order Management', p: 'PayPal integration with orders' }
      , { h2: 'User Roles', p: 'Role based user management for both client and server side e.g. User, Manager, Administrator' }
      , { h2: 'Email Integration', p: 'Now an email is sent as soon as a order is placed or payment failed' }
      , { h2: 'Material Design', p: 'Mobile Centered Material Designed components with accessibility support' }
      , { h2: 'New Design Principle', p: 'Flex based page design principle' }
      , { h2: 'Image Selector', p: 'Directly select image for a product from the media gallery' }
      , { h2: 'Cloning', p: 'Now Clone any brand, country, shipping, coupon to save time' }
      , { h2: 'Multi Level Category', p: 'Drag and drop category management upto 10 levels' }
      , { h2: 'Multi Currency', p: 'Support for additional currencies beyond US Dollars from a single settings page' }
      , { h2: 'Forgot Password', p: 'Forgotten password of a user or shop manager can be retrieved with a encryption based email service' }
      , { h2: 'Contact Page', p: 'A tiny little popup window for anybody to reach the store owner with any grievance or suggestions' }
      , { h2: 'PayPal', p: 'Now PayPal integration is more powerful with the managed payment status' }
      , { h2: 'Search', p: 'Instant product search.' }
    ]


  }

}
