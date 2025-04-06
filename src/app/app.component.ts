import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  online: boolean;

  constructor(private ngZone: NgZone) { }

  checkConnection(): void {
    this.ngZone.run(() => {
      this.online =
        (<Window>window).navigator && (<Window>window).navigator.onLine;
    });
  }
  private setupConnectionListener(): void {
    window.addEventListener('online', () => this.checkConnection());
    window.addEventListener('offline', () => this.checkConnection());
  }

  private cancelConnectionListener(): void {
    window.removeEventListener('online', () => this.checkConnection());
    window.removeEventListener('offline', () => this.checkConnection());
  }

  ngOnInit(): void {
    this.setupConnectionListener();
    this.checkConnection();
  }

  ngOnDestroy() {
    this.cancelConnectionListener();
  }
}
