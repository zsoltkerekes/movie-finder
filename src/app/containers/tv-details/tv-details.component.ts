﻿
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails, movieDetailsData } from '../../models/MovieDetails.model';
import { Title } from '@angular/platform-browser';

declare function escape(s: string): string;

@Component({
  selector: 'mf-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})

export class TVDetailsComponent implements OnInit {

  id: Number;
  tvShow: MovieDetails;
  height: String;
  createdBy: String;
  loading: boolean;
  getGlobal = this.api.getGlobal;
  innerWidth: number;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.loadTvShow();
        }
      );
  }

  loadTvShow = () => {
    this.loading = true;
    document.documentElement.scrollTop = 0;
    this.tvShow = movieDetailsData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getTvShowById(this.id)
      .subscribe(result => {
        let output = result.json();
        output = { ...this.tvShow, ...output };
        this.tvShow = output;
        if (this.tvShow.created_by) {
          this.createdBy = this.tvShow.created_by.map(row => row.name).join(', ');
        }
        this.title.setTitle(`${
          this.tvShow.name
          } (${
          this.listGenres(this.tvShow.genres)
          }) :: ${
          this.activatedRoute.snapshot.data['pageTitle']
          }`);
        this.loading = false;
      });
  }

  listGenres = array => {
    const output = [];
    if (array) {
      array.forEach(row => {
        output.push(row.name);
      });
      return output.join(', ');
    } else {
      return array;
    }
  }

  backgroundImage = () => {
    if (this.tvShow.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.tvShow.backdrop_path})`;
    }
  }

  open() {
    window.open(`http://bithumen.be/browse.php?search=${escape(this.tvShow.name.toString())}`, '_blank');
    window.open(`https://ncore.cc/torrents.php?mire=${escape(this.tvShow.name.toString())}`, '_blank');
  }

}