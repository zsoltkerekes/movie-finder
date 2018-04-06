import { People, peopleData } from './../../models/person.model';

import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails, movieDetailsData } from '../../models/MovieDetails.model';
import { Title } from '@angular/platform-browser';

declare function escape(s: string): string;
@Component({
  selector: 'mf-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})

export class PersonDetailsComponent implements OnInit {

  id: Number;
  person: People;
  height: String;
  loading: boolean;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.loadPerson();
        }
      );
  }


  loadPerson = () => {
    this.loading = true;
    document.documentElement.scrollTop = 0;
    this.person = peopleData;
    this.title.setTitle(`Részletes leírás :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getPersonById(this.id)
      .subscribe(result => {
        this.person = result.json();
        this.title.setTitle(`${
          this.person.name
          } :: ${
          this.activatedRoute.snapshot.data['pageTitle']
          }`);
        this.loading = false;
      });
  }

  listGenres = array => {
    const output = [];
    array.forEach(row => {
      output.push(row.name);
    });
    return output.join(', ');
  }

  getGender(id: number): string {
    switch (id) {
      case 1: return '(Nő)';
      case 2: return '(Férfi)';
      default: return 'Nincs megadva';
    }

  }

}
