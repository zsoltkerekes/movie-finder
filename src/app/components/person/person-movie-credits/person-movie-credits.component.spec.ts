import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMovieCreditsComponent } from './person-movie-credits.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { ConstantsService } from '../../../services/constants.service';
import { SearchPipe } from '../../../pipes/search.pipe';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { LanguageService } from '../../../services/language.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PersonMovieCreditsComponent', () => {
  let component: PersonMovieCreditsComponent;
  let fixture: ComponentFixture<PersonMovieCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonMovieCreditsComponent, SearchPipe],
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
    fixture = TestBed.createComponent(PersonMovieCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
