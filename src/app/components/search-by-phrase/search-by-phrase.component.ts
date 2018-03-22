import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-search-by-phrase',
  templateUrl: './search-by-phrase.component.html',
  styleUrls: ['./search-by-phrase.component.scss']
})
export class SearchByPhraseComponent {
  hint: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeHint(event.target.innerWidth);
  }

  constructor(
    private router: Router
  ) { }

  changeHint(width = 0) {
    this.hint = width >= 960 ? 'A keresés indításához gépelj be valamit, és nyomj az ENTER-re' : '';
  }

  keyPressed(event) {
    if ((event.key === 'Enter') && (event.target.value.length > 1 )) {
      this.router.navigate(['/search', event.target.value, 1, 1]);
      this.changeHint();
    } else if (event.key === 'Enter') {
      this.hint = `${event.target.value.length} karakter egy kereséshez.. kevés lesz.. :/`;
    }
  }

}
