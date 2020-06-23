import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { DiscoverTvOptionsComponent } from './discover-tv-options.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DiscoverTvOptionsComponent', () => {
  let component: DiscoverTvOptionsComponent;
  let fixture: ComponentFixture<DiscoverTvOptionsComponent>;
  let api: ApiService;
  let observable: ObservablesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverTvOptionsComponent],
      imports: [
        BrowserAnimationsModule,
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverTvOptionsComponent);
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
    api.getTvGenresArray = () => genres;
    component.ngDoCheck();
    fixture.detectChanges();
    expect(component.tvShowGenres).toEqual(genres);
  });

  it('should have a functional "setTvShowSortByOption" function', () => {
    const event = { value: 'dd' };
    component.setTvShowSortByOption(event);
    expect(observable.sortTvShowByOption.getValue()).toEqual(event.value);
  });

  it('should have a functional "setTvShowYearOption" function', () => {
    let event;
    event = { target: { value: 1000 } };
    component.setTvShowYearOption(event);
    fixture.detectChanges();
    expect(observable.tvShowYearOption.getValue()).toEqual(
      new Date().getFullYear()
    );
    event = { target: { value: new Date().getFullYear() } };
    component.setTvShowYearOption(event);
    fixture.detectChanges();
    expect(observable.tvShowYearOption.getValue()).toEqual(event.target.value);
  });

  it('should have a functional "setTvShowGenre" function', () => {
    let id;
    let event;
    id = 1;
    event = { checked: true };
    component.setTvShowGenre(id, event);
    fixture.detectChanges();
    expect(observable.tvWithGenresOption.getValue()).toEqual([0, id]);
    id = 2;
    event = { checked: false };
    component.setTvShowGenre(id, event);
    fixture.detectChanges();
    expect(observable.tvWithGenresOption.getValue()).toEqual([0]);
    component.selectedTvShowGenres = [];
    event = { checked: false };
    component.setTvShowGenre(id, event);
    fixture.detectChanges();
    expect(observable.tvWithGenresOption.getValue()).toEqual([]);
  });

  it('should have a functional "getTvCheckedStatus" function', () => {
    let result;
    result = component.getTvCheckedStatus(0);
    expect(result).toEqual('checked');
    result = component.getTvCheckedStatus(1);
    expect(result).toEqual(null);
  });
});
