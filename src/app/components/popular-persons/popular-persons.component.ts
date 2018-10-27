import {ActivatedRoute} from "@angular/router";
import {Component, OnInit, ViewChild} from "@angular/core";

import {ListItem, listItemInitData} from "../../models/listItem.model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'mf-popular-persons',
  templateUrl: './popular-persons.component.html',
  styleUrls: ['./popular-persons.component.scss']
})
export class PopularPersonsComponent implements OnInit {

  @ViewChild('container') container;

  popularPersons: { results: Array<ListItem> };
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
          this.popularPersons = {results: [listItemInitData]};
          this.page = +this.activatedRoute.snapshot.params['personPage'] || 1;
          this.api.getPopularPersons(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.popularPersons = output;
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
