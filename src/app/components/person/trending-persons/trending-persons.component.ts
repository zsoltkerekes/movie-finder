import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-trending-persons',
  templateUrl: './trending-persons.component.html',
  styleUrls: ['./trending-persons.component.scss'],
})
export class TrendingPersonComponent implements OnInit {
  @ViewChild('container', { static: false }) container;

  trendingPersons: { results: Array<ListItem> };
  personPage: number;
  isLoading: boolean;

  trendingText: string;
  noResultText: string;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.trendingText = this.language.getText(
      'Trending Persons',
      this.api.getGlobal()
    );
    this.noResultText = this.language.getText(
      'No results',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.isLoading = true;
      this.trendingPersons = { results: [listItemInitData] };
      this.personPage = +this.activatedRoute.snapshot.params['personPage'] || 1;
      this.api.getTrendingPersons(this.personPage).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.trendingPersons = output;
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
