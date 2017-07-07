import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  overview: String;
  constructor() { }

  ngOnInit() {
    this.overview = `+---client
+---node_modules
+---server
+---uploads
|   .angular-cli.json
|   .editorconfig
|   .env
|   .gitignore
|   karma.conf.js
|   package.json
|   protractor.conf.js
|   proxy.conf.json
|   tsconfig.json
|   tslint.json`
  }

}
