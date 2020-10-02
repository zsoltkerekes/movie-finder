import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss'],
})
export class SimilarMoviesComponent implements OnInit {
  @ViewChild('container', { static: true }) container;

  id: number;
  similarMoviesText: string;
  similarMovies: { results: Array<ListItem> };

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.similarMovies = { results: [listItemInitData] };

    this.similarMoviesText = this.language.getText(
      'Similar movies',
      this.api.getGlobal()
    );
    this.similarMovies = { results: [listItemInitData] };

    this.activatedRoute.params.subscribe(() => {
      this.container.nativeElement.scrollLeft = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.api.getSimilarMovies(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.similarMovies = output;
      });
    });
  }
}
