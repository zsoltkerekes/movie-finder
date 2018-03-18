import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent {

  constructor(
    private router: Router
  ) { }

  keyPressed(event) {
    if (event.key === 'Enter') {
      this.router.navigate(['/search', event.target.value, 1]);
    }
  }

}
