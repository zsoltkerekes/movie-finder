import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  movieFinder: string;
  links: Array<{ name: string; icon: string; url: string }>;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit(): void {
    this.movieFinder = this.language.getNav(
      'Movie Finder',
      this.api.getGlobal()
    );

    this.links = [
      {
        name: this.language.getNav('Search', this.api.getGlobal()),
        icon: 'find_in_page',
        url: '/search',
      },
      {
        name: this.language.getNav('Discover', this.api.getGlobal()),
        icon: 'track_changes',
        url: '/discover/1/1/1',
      },
      {
        name: this.language.getNav('Top Rated', this.api.getGlobal()),
        icon: 'thumb_up',
        url: '/top-rated/1/1/1',
      },
      {
        name: this.language.getNav('Now playing', this.api.getGlobal()),
        icon: 'theaters',
        url: '/now-playing/1',
      },
      {
        name: this.language.getNav('Upcoming', this.api.getGlobal()),
        icon: 'forward',
        url: '/upcoming/1',
      },
    ];
  }
}
