import { TestBed } from '@angular/core/testing';

import { ObservablesService } from './observables.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { LanguageService } from './language.service';
import { ConstantsService } from './constants.service';

describe('ObservablesService', () => {
  beforeEach(() =>
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
    })
  );

  it('should be created', () => {
    const service: ObservablesService = TestBed.get(ObservablesService);
    expect(service).toBeTruthy();
  });
});
