import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../services/api.service';
import { ObservablesService } from '../../services/observables.service';
import { LanguageService } from '../../services/language.service';
import { ConstantsService } from '../../services/constants.service';
import { TvGenresComponent } from './tv-genres.component';
import { Title } from '@angular/platform-browser';

describe('TvGenresComponent', () => {
  let component: TvGenresComponent;
  let fixture: ComponentFixture<TvGenresComponent>;
  let api: ApiService;
  let title: Title;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvGenresComponent],
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    api = TestBed.inject(ApiService);
    title = TestBed.inject(Title);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the right title', () => {
    api.tvGenres[this.id] = 'something';
    component.ngOnInit();
    expect(title.getTitle()).toBe('something :: undefined');
  });
});
