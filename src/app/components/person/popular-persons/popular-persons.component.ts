import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-popular-persons',
  templateUrl: './popular-persons.component.html',
  styleUrls: ['./popular-persons.component.scss'],
})
export class PopularPersonsComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  popularPersons: { results: Array<ListItem> };
  listGenres = this.api.getGenreList;

  page: number;
  isLoading: boolean;

  noResultsText: string;
  personsText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.noResultsText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );
    this.personsText = this.language.getText('Persons', this.api.getGlobal());

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.popularPersons = { results: [listItemInitData] };
      this.page = +this.activatedRoute.snapshot.params['personPage'] || 1;
      this.api.getPopularPersons(this.page).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.popularPersons = output;
        this.isLoading = false;
        if (this.container) {
          this.container.nativeElement.scrollLeft = 0;
        }
      });
      if (this.activatedRoute.snapshot.fragment === 'person') {
        document.querySelector('#person').scrollIntoView();
      }
    });
  }
}
