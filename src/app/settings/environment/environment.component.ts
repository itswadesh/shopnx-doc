import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {
  code: string;
  constructor() { }

  ngOnInit() {
    this.code = `
MONGODB_URI=mongodb://localhost:27017/shopnx-dev
DOMAIN=http://localhost:4200
SESSION_SECRET=shopnx-secret
PAYPAL_MODE=sandbox
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
PAYPAL_CLIENT_SECRET=YOUR_PAYPAL_CLIENT_SECRET
STRIPE_APIKEY=sk_test_REST_OF_YOUR_KEY
SENDGRID_APIKEY=YOUR_SENDGRID_API_KEY
FACEBOOK_ID=YOUR_FACEBOOK_ID
FACEBOOK_SECRET=YOUR_FACEBOOK_SECRET
TWITTER_ID=YOUR_TWITTER_ID
TWITTER_SECRET=YOUR_TWITTER_SECRET
GOOGLE_ID=YOUR_GOOGLE_ID
GOOGLE_SECRET=YOUR_GOOGLE_SECRET
GOOGLE_MAPS_API=YOUR_GOOGLE_MAPS_API
`;

  }

}
