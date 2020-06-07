import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FooterComponent } from './footer.component';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import { ScrollerService } from '../../../services/scroller.service';
import { HttpModule } from '@angular/http';
import { ConstantsService } from '../../../services/constants.service';
import { ObservablesService } from '../../../services/observables.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [FooterComponent],
      providers: [
        ApiService,
        LanguageService,
        ScrollerService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
