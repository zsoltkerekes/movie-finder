import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ScrollerService } from '../../../services/scroller.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date: Date;
  setGlobal = () => this.api.changeGlobal();
  getGlobal = () => this.api.getGlobal();
  setAdult = () => this.api.setAdult();
  getAdult = () => this.api.getAdult();

  constructor(private api: ApiService, public scroll: ScrollerService) {}

  ngOnInit() {
    this.date = new Date();
  }
}
