import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-tv-genres',
  templateUrl: './tv-genres.component.html',
})
export class TvGenresComponent implements OnInit {
  id: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.title.setTitle(
      `${this.api.tvGenres[this.id] ? this.api.tvGenres[this.id] : ''} ::: ${
        this.activatedRoute.snapshot.data['pageTitle']
      }`
    );
  }
}
