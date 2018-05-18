import { ActivatedRoute } from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import { ListItem, listItemInitData } from './../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-popular-persons',
  templateUrl: './popular-persons.component.html',
  styleUrls: ['./popular-persons.component.scss']
})
export class PopularPersonsComponent implements OnInit {

  @ViewChild ('container') container;

  popularPersons: { results: Array<ListItem> };
  page: number;

  listGenres = this.api.getGenreList;
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.popularPersons = { results: [listItemInitData] };
          this.container.nativeElement.scrollLeft = 0;
          this.page = +this.activatedRoute.snapshot.params['personPage'] || 1;
          this.api.getPopularPersons(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.popularPersons = output;
            });
            if (this.activatedRoute.snapshot.fragment === 'person') {
              document.querySelector('#person').scrollIntoView();
            }
        }
      );




  }

}
