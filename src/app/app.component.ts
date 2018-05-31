import {Component, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieLawSeen: boolean;

  @ViewChild('cookieLaw')
  cookieLawEl: any;

  ngOnInit() {
    this.cookieLawSeen = this.cookieLawEl.cookieLawSeen;
  }

}
