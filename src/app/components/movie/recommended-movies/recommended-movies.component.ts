import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss'],
})
export class RecommendedMoviesComponent implements OnInit {
  @ViewChild('container', { static: true }) container;
  id: number;
  recommendedMovies: { results: Array<ListItem> };

  recommendedMoviesText: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.recommendedMovies = {
      results: [listItemInitData],
    };
    this.recommendedMoviesText = this.language.getText(
      'Recommended movies',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.container.nativeElement.scrollLeft = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.api.getRecommendedMovies(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.recommendedMovies = output;
      });
    });
  }
}
