import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { TopRatedTvShowsComponent } from './top-rated-tv-shows.component';

describe('TopRatedTvShowsComponent', () => {
  let component: TopRatedTvShowsComponent;
  let fixture: ComponentFixture<TopRatedTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedTvShowsComponent],
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
    fixture = TestBed.createComponent(TopRatedTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
