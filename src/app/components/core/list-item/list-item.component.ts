import { ApiService } from '../../../services/api.service';
import { ListItem, listItemInitData } from '../../../models/listItem.model';
import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() movie: ListItem = listItemInitData;
  @Input() tvShow: ListItem = listItemInitData;
  @Input() person: ListItem = listItemInitData;

  innerWidth: number;
  titleLengthLimit: number;
  genreLengthLimit: number;
  title: string;

  getActs({ known_for = [] }: ListItem) {
    const result = [];
    known_for.forEach((movie) => movie.title && result.push(movie.title));
    return result.join(', ');
  }

  getTitle(movie: ListItem, tvShow: ListItem, person: ListItem): string {
    const movieData = movie
      ? `${movie.title}${movie.release_date ? ` (${movie.release_date})` : ''}${
          movie.vote_average &&
          movie.vote_average > 0 &&
          movie.vote_average < 10
            ? ` [${movie.vote_average}/10]`
            : ''
        }${
          movie.genre_ids && movie.genre_ids.length
            ? `\n${this.api.getGenreList(movie.genre_ids)}`
            : ''
        }${movie.overview ? `\n\n${movie.overview}` : ''}`
      : null;

    const tvShowData = tvShow
      ? `${tvShow.name}${
          tvShow.release_date ? ` (${tvShow.release_date})` : ''
        }${
          tvShow.vote_average &&
          tvShow.vote_average > 0 &&
          tvShow.vote_average < 10
            ? ` [${tvShow.vote_average}/10]`
            : ''
        }${
          tvShow.genre_ids && tvShow.genre_ids.length
            ? `\n${this.api.getTvGenreList(this.tvShow.genre_ids)}`
            : ''
        }${tvShow.overview ? `\n\n${tvShow.overview}` : ''}`
      : null;

    const personData = person
      ? `${person.name}\n${this.getActs(person)}`
      : null;

    return movieData || personData || tvShowData || this.language.na;
  }

  constructor(public api: ApiService, public language: LanguageService) {}

  ngOnInit() {
    this.titleLengthLimit = 27;
    this.genreLengthLimit = 30;
    this.innerWidth = window.innerWidth;
    this.title = this.getTitle(this.movie, this.tvShow, this.person);
  }
}
