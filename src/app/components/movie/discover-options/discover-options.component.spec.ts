import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOptionsComponent } from './discover-options.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DiscoverOptionsComponent', () => {
  let component: DiscoverOptionsComponent;
  let fixture: ComponentFixture<DiscoverOptionsComponent>;
  let api: ApiService;
  let observable: ObservablesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
      ],
      declarations: [DiscoverOptionsComponent],
      providers: [
        ApiService,
        ObservablesService,
        LanguageService,
        ConstantsService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    api = TestBed.inject(ApiService);
    observable = TestBed.inject(ObservablesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle changes', () => {
    const genres = [{ id: 1, name: 'id' }];
    api.getGenresArray = () => genres;
    component.ngDoCheck();
    fixture.detectChanges();
    expect(component.movieGenres).toEqual(genres);
  });

  it('should have a functional "setMovieSortByOption" function', () => {
    const event = { value: 'dd' };
    component.setMovieSortByOption(event);
    expect(observable.sortMovieByOption.getValue()).toEqual(event.value);
  });

  it('should have a functional "setMovieYearOption" function', () => {
    let event;
    event = { target: { value: 1000 } };
    component.setMovieYearOption(event);
    fixture.detectChanges();
    expect(observable.movieYearOption.getValue()).toEqual(
      new Date().getFullYear()
    );
    event = { target: { value: new Date().getFullYear() } };
    component.setMovieYearOption(event);
    fixture.detectChanges();
    expect(observable.movieYearOption.getValue()).toEqual(event.target.value);
  });

  it('should have a functional "setMovieGenre" function', () => {
    let id;
    let event;
    id = 1;
    event = { checked: true };
    component.setMovieGenre(id, event);
    fixture.detectChanges();
    expect(observable.withGenresOption.getValue()).toEqual([0, id]);
    id = 2;
    event = { checked: false };
    component.setMovieGenre(id, event);
    fixture.detectChanges();
    expect(observable.withGenresOption.getValue()).toEqual([0]);
    component.selectedMovieGenres = [];
    event = { checked: false };
    component.setMovieGenre(id, event);
    fixture.detectChanges();
    expect(observable.withGenresOption.getValue()).toEqual([]);
  });

  it('should have a functional "getCheckedStatus" function', () => {
    let result;
    result = component.getCheckedStatus(0);
    expect(result).toEqual('checked');
    result = component.getCheckedStatus(1);
    expect(result).toEqual(null);
  });
});
