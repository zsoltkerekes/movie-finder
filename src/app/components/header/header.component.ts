import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Array<{ name: String, icon: String, url: String }>;

  constructor() { }

  ngOnInit() {

    this.links = [
      { name: 'Keresés', icon: 'find_in_page', url: '/search' },
      { name: 'Népszerűek', icon: 'trending_up', url: '/popular/1/1' },
      { name: 'Legjobbak', icon: 'thumb_up', url: '/top-rated/1/1' },
      { name: 'Most a Mozikban', icon: 'theaters', url: '/now-playing/1' },
      { name: 'Nemsokára a Mozikban', icon: 'forward', url: '/upcoming/1' }
    ];

  }

}
