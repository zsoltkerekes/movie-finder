import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { MaterialModule } from '../../../shared-modules/material/material.module';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import { ConstantsService } from '../../../services/constants.service';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ObservablesService } from '../../../services/observables.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { ListItem } from '../../../interfaces/listItem.interface';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // tslint:disable-next-line: deprecation
        HttpModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
      ],
      declarations: [ListItemComponent, TruncatePipe],
      providers: [
        ApiService,
        LanguageService,
        ConstantsService,
        ObservablesService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able handling create acts even if no data', async(() => {
    const result = component.getActs({} as ListItem);
    expect(result).toBe('');
  }));

  it('should be able handling create acts even if data is corrupt', async(() => {
    const result = component.getActs(({
      known_for: [{ title: undefined }, { title: undefined }],
    } as unknown) as ListItem);
    expect(result).toBe('');
  }));

  it('should be able handling create acts', async(() => {
    const result = component.getActs(({
      known_for: [{ title: 'this' }, { title: 'that' }],
    } as unknown) as ListItem);
    expect(result).toBe('this, that');
  }));

  it('should not crash when create title even if no data', async(() => {
    const result = component.getTitle(null, null, null);
    expect(result).toBe('n/a');
  }));

  it('should create movie title', async(() => {
    const result = component.getTitle(
      ({
        title: '5',
        release_date: '5',
        vote_average: 5,
        genre_ids: [5],
        overview: '5',
      } as unknown) as ListItem,
      null,
      null
    );
    expect(result).toBe('5 (5) [5/10]\n\n\n5');
  }));

  it('should create tv show title', async(() => {
    const result = component.getTitle(
      null,
      ({
        name: '5',
        release_date: '5',
        vote_average: 5,
        genre_ids: [5],
        overview: '5',
      } as unknown) as ListItem,
      null
    );
    expect(result).toBe('5 (5) [5/10]\n\n\n5');
  }));

  it('should create person title', async(() => {
    const result = component.getTitle(null, null, ({
      name: '5',
    } as unknown) as ListItem);
    expect(result).toBe('5\n');
  }));
});
