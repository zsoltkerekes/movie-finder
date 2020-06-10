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

describe('MovieCollectionComponent', () => {
  let component: MovieCreditsComponent;
  let fixture: ComponentFixture<MovieCreditsComponent>;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
