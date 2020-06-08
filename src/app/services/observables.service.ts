import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ObservablesService {
  sortMovieByOption: BehaviorSubject<string>;
  sortTvShowByOption: BehaviorSubject<string>;
  movieYearOption: BehaviorSubject<number>;
  tvShowYearOption: BehaviorSubject<number>;
  withGenresOption: BehaviorSubject<number[]>;
  tvWithGenresOption: BehaviorSubject<number[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.sortMovieByOption = new BehaviorSubject<string>('');
    this.sortTvShowByOption = new BehaviorSubject<string>('');
    this.movieYearOption = new BehaviorSubject<number>(0);
    this.tvShowYearOption = new BehaviorSubject<number>(0);
    this.withGenresOption = new BehaviorSubject<number[]>([0]);
    this.tvWithGenresOption = new BehaviorSubject<number[]>([0]);
  }

  initMovie() {
    const params =
      this.activatedRoute &&
      this.activatedRoute.snapshot &&
      this.activatedRoute.snapshot.children['0'] &&
      this.activatedRoute.snapshot.children['0'].firstChild.params;
    this.sortMovieByOption = new BehaviorSubject<string>(
      (params && params['sortMovieBy']) || 'popularity.desc'
    );
    this.movieYearOption = new BehaviorSubject<number>(
      (params && +params['movieYear']) || new Date().getFullYear()
    );
    this.withGenresOption = new BehaviorSubject<number[]>(
      params && params['withGenres'] ? params['withGenres'].split(',') : [0]
    );
  }

  initTv() {
    const params =
      this.activatedRoute &&
      this.activatedRoute.snapshot &&
      this.activatedRoute.snapshot.children['0'] &&
      this.activatedRoute.snapshot.children['0'].firstChild.params;
    this.sortTvShowByOption = new BehaviorSubject<string>(
      (params && params['sortTvShowBy']) || 'popularity.desc'
    );
    this.tvShowYearOption = new BehaviorSubject<number>(
      (params && +params['tvShowYear']) || new Date().getFullYear()
    );
    this.tvWithGenresOption = new BehaviorSubject<number[]>(
      params && params['tvWithGenres'] ? params['tvWithGenres'].split(',') : [0]
    );
  }
}
