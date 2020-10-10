import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { movieDetailsData } from '../../../interfaces/MovieDetails.interface';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let api: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
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
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react changes', () => {
    spyOn(component, 'loadMovie');
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.loadMovie).toHaveBeenCalled();
  });

  it('should get data with every change', () => {
    component.id = 1;
    const response = {
      ...movieDetailsData,
      title: 'something',
      genres: [{ name: 'anything' }],
      backdrop_path: 'url',
    };
    Object.prototype['json'] = () => response;
    const mockSubscribe = new Object();
    mockSubscribe['subscribe'] = (cb: any) => {
      cb(response);
    };

    spyOn(api, 'getMovieById').and.returnValues(mockSubscribe as any);
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.movie).toEqual(response as any);
  });
});
