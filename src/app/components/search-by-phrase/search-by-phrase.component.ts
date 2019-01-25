import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {debounceTime, filter} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent implements OnInit {
  queryPhrase = new BehaviorSubject<string>('');
  placeholder: string;

  constructor(private router: Router,
              private api: ApiService) {
  }

  ngOnInit() {
    this.placeholder = this.api.getGlobal() ? 'Search' : 'Keresés';
    this.queryPhrase.asObservable()
      .pipe(
        filter(res => res.length >= 3),
        debounceTime(500)
      )
      .subscribe(
        () => this.router.navigate(['/search', this.queryPhrase.getValue(), 1, 1, 1])
      );
  }

  inputChanged = (event) => this.queryPhrase.next(event.target.value);

}
