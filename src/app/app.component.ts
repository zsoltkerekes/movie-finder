import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  checkConnection = () => {
    // @ts-ignore
    return (window.navigator.connection.type || '');
  };

  ngOnInit() {
    // @ts-ignore
    window.navigator.connection.onchange = this.checkConnection;
    this.checkConnection();
  }

}
