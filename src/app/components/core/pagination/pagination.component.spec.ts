import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ConstantsService } from '../../../services/constants.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  const results = {
    total_pages: 1,
    total_results: 1,
    page: 1,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
      ],
      declarations: [PaginationComponent],
      providers: [
        ApiService,
        ObservablesService,
        LanguageService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able react changes even if no data provided', () => {
    component.ngOnChanges();
    expect(component.moviePage).toBe(1);
    expect(component.tvShowPage).toBe(1);
    expect(component.personPage).toBe(1);
    expect(component.personPage).toBe(1);
    expect(component.personPage).toBe(1);
  });

  it('should be able react changes when minimal data provided', () => {
    component.results = results;
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: 'undefined/1', name: '1-1' }],
    });
  });

  it('should be able react changes when some data provided', () => {
    component.results = results;
    component.url = '/discover/';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: '/discover//1//0/0//0/0', name: '1-1' }],
    });
  });

  it('should be able react changes when movie data provided', () => {
    component.results = results;
    component.type = 'movie';
    component.url = '';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: '/1/1/1', name: '1-1' }],
    });
  });

  it('should be able react changes when tvShow data provided', () => {
    component.results = results;
    component.type = 'tvShow';
    component.url = '';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: '/1/1/1', name: '1-1' }],
    });
  });

  it('should be able react changes when person data provided', () => {
    component.results = results;
    component.type = 'person';
    component.url = '';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: '/1/1/1', name: '1-1' }],
    });
  });

  it('should be bale react changes when keyword data provided', () => {
    component.results = results;
    component.type = 'keyword';
    component.url = '';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      ...results,
      links: [{ url: '/1', name: '1-1' }],
    });
  });

  it('should be able react changes when no pages to process', () => {
    component.results = { ...results, total_pages: 0 };
    component.ngOnChanges();
    expect(component.pagination.links).toEqual([]);
  });

  it('should be able react changes when pagination occurred', () => {
    component.results = { total_pages: 100, total_results: 2000, page: 10 };
    component.type = 'person';
    component.url = '';
    component.ngOnChanges();
    expect(component.pagination).toEqual({
      total_pages: 100,
      total_results: 2000,
      page: 10,
      links: [
        Object({ url: '/1/1/6', name: '101-120' }),
        Object({ url: '/1/1/7', name: '121-140' }),
        Object({ url: '/1/1/8', name: '141-160' }),
        Object({ url: '/1/1/9', name: '161-180' }),
        Object({ url: '/1/1/10', name: '181-200' }),
        Object({ url: '/1/1/11', name: '201-220' }),
        Object({ url: '/1/1/12', name: '221-240' }),
        Object({ url: '/1/1/13', name: '241-260' }),
        Object({ url: '/1/1/14', name: '261-280' }),
        Object({ url: '/1/1/15', name: '281-300' }),
      ],
    });
  });
});
