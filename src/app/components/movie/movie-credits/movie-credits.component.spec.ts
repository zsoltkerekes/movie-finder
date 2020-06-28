import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiService } from '../../../services/api.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { MovieCreditsComponent } from './movie-credits.component';
import { SearchPipe } from '../../../pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { peopleMovieCreditsData } from '../../../interfaces/person.interface';

describe('MovieCollectionComponent', () => {
  let component: MovieCreditsComponent;
  let fixture: ComponentFixture<MovieCreditsComponent>;
  let api: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCreditsComponent, SearchPipe],
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
        LanguageService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();

    api = TestBed.inject(ApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react changes', () => {
    spyOn(api, 'getMovieCredits');
    component.ngOnChanges();
    fixture.detectChanges();
    expect(api.getMovieCredits).not.toHaveBeenCalled();
  });

  it('should get data with every change', () => {
    component.id = 1;
    spyOn(api, 'getMovieCredits').and.returnValues(({
      subscribe: () => {},
    } as unknown) as Observable<any>);
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.movieCredits).toEqual(peopleMovieCreditsData);
  });
});
