import { ConstantsService } from './../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date: Date;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.date = new Date();
  }

  setGlobal = () => this.api.changeGlobal();
  getGlobal = () => this.api.getGlobal();

  setAdult = () => this.api.setAdult();
  getAdult = () => this.api.getAdult();

}
