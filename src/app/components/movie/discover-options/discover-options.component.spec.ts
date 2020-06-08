import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOptionsComponent } from './discover-options.component';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../../services/api.service';
import { ObservablesService } from '../../../services/observables.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DiscoverOptionsComponent', () => {
  let component: DiscoverOptionsComponent;
  let fixture: ComponentFixture<DiscoverOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
      ],
      declarations: [DiscoverOptionsComponent],
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
    fixture = TestBed.createComponent(DiscoverOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
