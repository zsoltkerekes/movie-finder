import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionComponent } from './movie-collection.component';
import { ApiService } from '../../../services/api.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';

describe('MovieCollectionComponent', () => {
  let component: MovieCollectionComponent;
  let fixture: ComponentFixture<MovieCollectionComponent>;
  let api: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCollectionComponent],
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
    fixture = TestBed.createComponent(MovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react changes', () => {
    spyOn(component, 'loadCollectionData').and.callThrough();
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.loadCollectionData).toHaveBeenCalled();
  });

  it('should get data with every change', (done) => {
    component.id = 1;
    const response = { parts: [{ release_date: 2 }, { release_date: 1 }] };
    Object.prototype['json'] = () => response;
    const mockSubscribe = new Object();
    mockSubscribe['subscribe'] = (cb: any) => {
      cb(response);
    };

    spyOn(api, 'getMovieCollections').and.returnValues(mockSubscribe as any);
    component.ngOnChanges();
    done();

    fixture.detectChanges();
    expect(component.collection.parts).toEqual(response.parts as any);
  });
});
