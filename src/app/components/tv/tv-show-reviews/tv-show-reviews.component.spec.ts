import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { TvShowReviewsComponent } from './tv-show-reviews.component';

describe('TvShowReviewsComponent', () => {
  let component: TvShowReviewsComponent;
  let fixture: ComponentFixture<TvShowReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowReviewsComponent],
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
    fixture = TestBed.createComponent(TvShowReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
