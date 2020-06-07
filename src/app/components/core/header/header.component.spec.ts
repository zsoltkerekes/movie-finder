import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConstantsService } from '../../../services/constants.service';
import { ObservablesService } from '../../../services/observables.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
      ],
      declarations: [HeaderComponent],
      providers: [
        ApiService,
        LanguageService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
