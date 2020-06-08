import { inject, TestBed } from '@angular/core/testing';

import { ConstantsService } from './constants.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../shared-modules/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from './api.service';
import { ObservablesService } from './observables.service';
import { LanguageService } from './language.service';

describe('ConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
  });

  it('should be created', inject(
    [ConstantsService],
    (service: ConstantsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
