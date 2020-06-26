import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  online: boolean;

  constructor(private ngZone: NgZone) {}

  checkConnection() {
    this.ngZone.run(() => {
      this.online = (<any>window).navigator && (<any>window).navigator.onLine;
    });
  }

  ngOnInit() {
    this.online = true;
    (<any>window).navigator.connection.onchange = this.checkConnection.bind(
      this
    );
    this.checkConnection();
  }
}
