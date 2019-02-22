import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {debounceTime , filter} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  queryPhrase = new BehaviorSubject<string>('');
  placeholder: string;
  showButton: boolean;
  hint: string;
  min: number;
  max: number;

  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.message.nativeElement.focus();
    this.hint = '';
    this.placeholder = this.api.getGlobal() ? 'Search' : 'Keresés';
    this.min = 2;
    this.max = 100;
    this.showButton = this.shouldButtonShow();
    window.onresize = () => {
      this.showButton = this.shouldButtonShow();
    };
    this.queryPhrase.next(this.route.snapshot.params.phrase || '');
    this.updateHint();
    this.queryPhrase.asObservable()
      .pipe(
        filter((res: any) => res.length >= 2),
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
    this.updateHint();
  }

  onButtonClicked = (value: string): void => this.queryPhrase.next(value);

  shouldButtonShow = () => window.outerWidth <= 960;

  updateHint = (): void => {
    this.hint = this.queryPhrase.getValue().length < this.min ? this.api.getGlobal() ?
    `Minimum ${this.min} chars` : `Minimum ${this.min} karekter` : this.queryPhrase.getValue().length >= this.max ? this.api.getGlobal() ?
    `Maximum ${this.max} chars` : `Maximum ${this.min} karekter` : '';
  }

}
