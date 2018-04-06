import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ListItem, listItemInitData } from './../../models/listItem.model';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'mf-popular-persons',
  templateUrl: './popular-persons.component.html',
  styleUrls: ['./popular-persons.component.scss']
})
export class PopularPersonsComponent implements OnInit {

  popularPersons: { results: Array<ListItem> } = { results: [listItemInitData] };
  page: number;

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
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
