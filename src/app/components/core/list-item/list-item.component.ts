import { ApiService } from '../../../services/api.service';
import { ListItem, listItemInitData } from '../../../models/listItem.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mf-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() movie: ListItem = listItemInitData;
  @Input() tvShow: ListItem = listItemInitData;
  @Input() person: ListItem = listItemInitData;

  innerWidth: number;
  listGenres = this.api.getGenreList;
  listTvGenres = this.api.getTvGenreList;
  titleLimit: 27;
  genreLimit: 30;

  constructor(private api: ApiService) {
    this.innerWidth = window.innerWidth;
  }

  acts() {
    return this.person.known_for.map((movie) => movie.title).join(', ');
  }
}
