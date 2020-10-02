import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  online: boolean;

  constructor(private ngZone: NgZone) {}

  checkConnection(): void {
    this.ngZone.run(() => {
      this.online =
        (<Window>window).navigator && (<Window>window).navigator.onLine;
    });
  }

  ngOnInit(): void {
    this.online = true;
    (<Window>window)['navigator'][
      'connection'
    ].onchange = this.checkConnection.bind(this);
    this.checkConnection();
  }
}
