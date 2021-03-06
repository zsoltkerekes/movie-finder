import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-genres',
  templateUrl: './genres.component.html',
})
export class GenresComponent implements OnInit {
  id: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.title.setTitle(
      `${this.api.genres[this.id] ? this.api.genres[this.id] : 'Genres'} ::: ${
        this.activatedRoute.snapshot.data['pageTitle']
      }`
    );
  }
}
