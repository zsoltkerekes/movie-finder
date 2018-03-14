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
      { name: 'Főoldal', icon: 'dashboard', url: '/' },
      { name: 'Népszerűek', icon: 'trending_up', url: '/popular' },
      { name: 'Legjobbak', icon: 'thumb_up', url: '/top-rated' },
      { name: 'Keresés', icon: 'find_in_page', url: '/search' }
    ];

  }

}
