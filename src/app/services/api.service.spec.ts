import { inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ObservablesService } from './observables.service';
import { LanguageService } from './language.service';
import { ConstantsService } from './constants.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
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
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
