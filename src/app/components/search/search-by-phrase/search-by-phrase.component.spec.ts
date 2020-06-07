import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByPhraseComponent } from './search-by-phrase.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchByPhraseComponent', () => {
  let component: SearchByPhraseComponent;
  let fixture: ComponentFixture<SearchByPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByPhraseComponent],
      imports: [
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(SearchByPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
