import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {
  mongo: String;
  cli: String;
  dist: String;
  constructor() { }

  ngOnInit() {
    this.mongo = `C:/Program Files/MongoDB/Server/3.2/bin/mongod.exe`;
    this.cli = `npm i
npm run dev`;
    this.dist = `npm run prod`;
  }

}
