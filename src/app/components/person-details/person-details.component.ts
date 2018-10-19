import {Component, OnInit} from '@angular/core';
import {People, peopleData} from '../../models/person.model';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'mf-persons-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonsDetailsComponent implements OnInit {


  id: number;
  person: People;
  height: string;
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
          this.loadPerson();
        }
      );
  }


  loadPerson = () => {
    this.loading = true;
    document.documentElement.scrollTop = 0;
    this.person = peopleData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
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
  };

  listGenres = array => {
    const output = [];
    array.forEach(row => {
      output.push(row.name);
    });
    return output.join(', ');
  };

  getGender(id: number): string {
    switch (id) {
      case 1:
        return this.getGlobal() ? '(Woman)' : '(Nő)';
      case 2:
        return this.getGlobal() ? '(Man)' : '(Férfi)';
      default:
        return '';
    }

  }

}
