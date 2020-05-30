import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ObservablesService implements OnInit {
  sortMovieByOption: BehaviorSubject<string>;
  sortTvShowByOption: BehaviorSubject<string>;
  movieYearOption: BehaviorSubject<number>;
  tvShowYearOption: BehaviorSubject<number>;
  withGenresOption: BehaviorSubject<number[]>;
  tvWithGenresOption: BehaviorSubject<number[]>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.children['0'].firstChild.params;
    this.sortMovieByOption = new BehaviorSubject<string>(
      params['sortMovieBy'] || 'popularity.desc'
    );
    this.sortTvShowByOption = new BehaviorSubject<string>(
      params['sortTvShowBy'] || 'popularity.desc'
    );
    this.movieYearOption = new BehaviorSubject<number>(
      +params['movieYear'] || new Date().getFullYear()
    );
    this.tvShowYearOption = new BehaviorSubject<number>(
      +params['tvShowYear'] || new Date().getFullYear()
    );
    this.withGenresOption = new BehaviorSubject<number[]>(
      params['withGenres'] ? params['withGenres'].split(',') : [0]
    );
    this.tvWithGenresOption = new BehaviorSubject<number[]>(
      params['tvWithGenres'] ? params['tvWithGenres'].split(',') : [0]
    );
  }
}
