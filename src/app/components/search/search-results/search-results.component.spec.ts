import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let api: ApiService;

  const response = {
    results: [{ popularity: 1 }, { popularity: 2 }],
  };

  Object.prototype['json'] = () => response;
  const mockSubscribe = new Object();
  mockSubscribe['subscribe'] = (cb: any) => {
    cb(response);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsComponent],
      imports: [
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
      ],
      providers: [
        ApiService,
        ObservablesService,
        LanguageService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();

    api = TestBed.inject(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a working keywords search', () => {
    spyOn(api, 'getKeywordSearch').and.returnValues(mockSubscribe as any);
    component.keywordsSearch();
    fixture.detectChanges();
    expect(component.keywordsSearchResults).toEqual(response as any);
  });

  it('should have a working movie search', () => {
    spyOn(api, 'getMovieSearch').and.returnValues(mockSubscribe as any);
    component.movieSearch();
    fixture.detectChanges();
    expect(component.movieSearchResults).toEqual(response as any);
  });

  it('should have a working tvShow search', () => {
    spyOn(api, 'getTvShowSearch').and.returnValues(mockSubscribe as any);
    component.tvShowSearch();
    fixture.detectChanges();
    expect(component.tvShowSearchResults).toEqual(response as any);
  });

  it('should have a working person search', () => {
    spyOn(api, 'getPersonSearch').and.returnValues(mockSubscribe as any);
    component.personSearch();
    fixture.detectChanges();
    expect(component.personSearchResults).toEqual(response as any);
  });
});
