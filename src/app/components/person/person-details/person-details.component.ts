import { Component, OnInit } from '@angular/core';
import { People, peopleData } from '../../../interfaces/person.interface';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { Query } from '../../../interfaces/query.interface';

@Component({
  selector: 'mf-persons-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonsDetailsComponent implements OnInit {
  id: number;
  person: People;
  height: string;
  loading: boolean;
  innerWidth: number;

  queries: Array<Query>;

  search: string;
  byNameText: string;
  birthdayText: string;
  deathDayText: string;
  homepageText: string;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.search = this.language.getText('Search', this.api.getGlobal());
    this.byNameText = this.language.getText('Search', this.api.getGlobal());
    this.birthdayText = this.language.getText('Birthday', this.api.getGlobal());
    this.deathDayText = this.language.getText('Deathday', this.api.getGlobal());
    this.homepageText = this.language.getText('Homepage', this.api.getGlobal());

    this.innerWidth = window.innerWidth;
    this.activatedRoute.params.subscribe(() => {
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.loadPerson();
    });

    this.queries = [
      { name: 'Youtube', url: 'https://www.youtube.com/results?search_query=' },
      {
        name: 'Online Filmek',
        url: 'https://online-filmek.me/kereses.php?kereses=',
      },
      { name: 'Google', url: 'https://www.google.hu/search?q=' },
      { name: 'Netflix', url: 'https://www.netflix.com/search?q=' },
    ];
  }

  loadPerson = () => {
    this.loading = true;
    document.documentElement.scrollTop = 0;
    this.person = peopleData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getPersonById(this.id).subscribe(
      (result) => {
        this.person = result.json();
        this.title.setTitle(
          `${this.person.name} :: ${this.activatedRoute.snapshot.data['pageTitle']}`
        );
        this.loading = false;
      },
      (error) => {
        if (error.status === 404) {
          this.router.navigate(['/404']);
        }
      }
    );
  };

  listGenres = (array = []) => {
    const output = [];
    array.forEach((row) => {
      output.push(row.name);
    });
    return output.join(', ');
  };

  getGender(id: number = 0): string {
    switch (id) {
      case 1:
        return `(${this.language.getText('Woman', this.api.getGlobal())})`;
      case 2:
        return `(${this.language.getText('Man', this.api.getGlobal())})`;
      default:
        return '';
    }
  }
}
