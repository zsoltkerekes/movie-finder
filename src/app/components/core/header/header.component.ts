import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links: Array<{ name: string, icon: string, url: string }>;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

    if (this.api.getGlobal() === true) {
      this.links = [
        {name: 'Search', icon: 'find_in_page', url: '/search'},
        {name: 'Discover', icon: 'track_changes', url: '/discover/1/1/1'},
        {name: 'Top Rated', icon: 'thumb_up', url: '/top-rated/1/1/1'},
        {name: 'Now playing', icon: 'theaters', url: '/now-playing/1'},
        {name: 'Upcoming', icon: 'forward', url: '/upcoming/1'}
      ];
    } else {
      this.links = [
        {name: 'Keresés', icon: 'find_in_page', url: '/search'},
        {name: 'Felfedezés', icon: 'track_changes', url: '/discover/1/1/1'},
        {name: 'Legjobbak', icon: 'thumb_up', url: '/top-rated/1/1/1'},
        {name: 'Most a Mozikban', icon: 'theaters', url: '/now-playing/1'},
        {name: 'Nemsokára a Mozikban', icon: 'forward', url: '/upcoming/1'}
      ];
    }

  }

}
