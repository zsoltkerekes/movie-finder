import {ActivatedRoute} from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';

import {ListItem, listItemInitData} from '../../models/listItem.model';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'mf-top-rated-persons',
  templateUrl: './top-rated-persons.component.html',
  styleUrls: ['./top-rated-persons.component.scss']
})
export class TopRatedPersonsComponent implements OnInit {

  @ViewChild('container') container;

  topRatedPersons: { results: Array<ListItem> };
  page: number;
  isLoading: boolean;
  listGenres = this.api.getGenreList;
  getGlobal = this.api.getGlobal;

  constructor(private api: ApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.isLoading = true;
          this.topRatedPersons = {results: [listItemInitData]};
          this.page = +this.activatedRoute.snapshot.params['personPage'] || 1;
          this.api.getPopularPersons(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.topRatedPersons = output;
              this.isLoading = false;
              if (this.container) {
                this.container.nativeElement.scrollLeft = 0;
              }
            });
          if (this.activatedRoute.snapshot.fragment === 'person') {
            document.querySelector('#person').scrollIntoView();
          }
        }
      );


  }

}
