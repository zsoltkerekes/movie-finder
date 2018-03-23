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
  sortByOptions: Array<{name: string, value: string}>;
  selected: String;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.sortByOptions = this.api.getSortByOptions();
    this.selected = this.api.getSortByOption();
  }

  setGlobal = () => this.api.changeGlobal();
  getGlobal = () => this.api.getGlobal();

  setSortByOption = event => this.api.setSortByOption(event.value);

  setAdult = () => this.api.setAdult();
  getAdult = () => this.api.getAdult();

}
