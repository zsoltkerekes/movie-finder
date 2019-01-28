import {ApiService} from '../../../services/api.service';
import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'mf-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() movie: ListItem = listItemInitData;
  @Input() tvShow: ListItem = listItemInitData;
  @Input() person: ListItem = listItemInitData;

  listGenres = this.api.getGenreList;
  listTvGenres = this.api.getTvGenreList;

  titleLimit: 27;
  genreLimit: 30;


  innerWidth: number;

  constructor(private api: ApiService) {
    this.innerWidth = window.innerWidth;
  }

}
