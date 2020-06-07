import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowEpisodesDetailsComponent } from './tv-show-episodes-details.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TvShowEpisodesDetailsComponent', () => {
  let component: TvShowEpisodesDetailsComponent;
  let fixture: ComponentFixture<TvShowEpisodesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowEpisodesDetailsComponent],
      imports: [
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(TvShowEpisodesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
