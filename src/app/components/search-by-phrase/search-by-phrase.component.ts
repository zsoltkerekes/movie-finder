import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent implements OnInit {
  hint: string;
  placeholder: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeHint(event.target.innerWidth);
  }

  ngOnInit () {
    this.placeholder = this.api.getGlobal() ? 'Search' : 'Keresés';
    this.changeHint(document.body.offsetWidth);
  }

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  changeHint(width = 0) {
    const message = this.api.getGlobal() ?
    'To start search, write something, and press ENTER' :
    'A keresés indításához gépelj be valamit, és nyomj az ENTER-re';
    this.hint = width >= 960 ? message : '';
  }

  keyPressed(event) {
    if ((event.key === 'Enter') && (event.target.value.length > 1 )) {
      this.router.navigate(['/search', event.target.value, 1, 1, 1]);
      this.changeHint();
    } else if (event.key === 'Enter') {
      this.hint = this.api.getGlobal() ?
       `${event.target.value.length} char long text is too short for a search I think.. :/` :
       `${event.target.value.length} karakter egy kereséshez.. kevés lesz.. :/`;
    }
  }

}
