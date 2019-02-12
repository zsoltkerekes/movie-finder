import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  checkConnection() {
    return ((<any>window).navigator && (<any>window).navigator.connection ? (<any>window).navigator.connection.type : '');
  }

  ngOnInit() {
    (<any>window).navigator.connection.onchange = this.checkConnection;
    this.checkConnection();
  }
}


