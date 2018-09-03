import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieLawSeen: boolean;
  @ViewChild('cookieLaw') cookieLaw: any;

  checkConnection = () => {
    // @ts-ignore
    return(window.navigator.connection.type || '');
  }

  ngOnInit() {
    this.cookieLawSeen = this.cookieLaw.cookieLawSeen;
    // @ts-ignore
    window.navigator.connection.onchange = this.checkConnection;
    this.checkConnection();
  }

}
