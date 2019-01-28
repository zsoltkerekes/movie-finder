import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {debounceTime /*, filter */} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent implements OnInit {
  queryPhrase = new BehaviorSubject<string>('');
  placeholder: string;
  showButton: boolean;

  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.placeholder = this.api.getGlobal() ? 'Search' : 'Keresés';
    this.showButton = this.shouldButtonShow();
    window.onresize = () => {
      this.showButton = this.shouldButtonShow();
    };
    this.queryPhrase.next(this.route.snapshot.params.phrase || '');
    this.queryPhrase.asObservable()
      .pipe(
        // filter((res: any) => res.length >= 3),
        debounceTime(500)
      )
      .subscribe(
        () => {
          this.router.navigate(['/search', this.queryPhrase.getValue(), 1, 1, 1]);
        }
      );
  }

  inputChanged = (event: { target: { value: string } }): void => {
    if (!this.shouldButtonShow()) {
      this.queryPhrase.next(event.target.value);
    }
  }

  onButtonClicked = (value: string): void => this.queryPhrase.next(value);

  shouldButtonShow = () => window.outerWidth <= 960;

}
