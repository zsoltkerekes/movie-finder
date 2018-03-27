import { Component, Input } from '@angular/core';

@Component({
  selector: 'mf-tv-show-seasons',
  templateUrl: './tv-show-seasons.component.html',
  styleUrls: ['./tv-show-seasons.component.scss']
})
export class TvShowSeasonsComponent {

  @Input('tvShow') tvShow;

  constructor() {
  }
}
