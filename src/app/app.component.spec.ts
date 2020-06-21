import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgZone } from '@angular/core';

class MockNgZone extends NgZone {
  run(cb): any {
    return cb();
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [MockNgZone],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should be able to check connection', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.checkConnection).toBeDefined();
    component.checkConnection();
    fixture.detectChanges();
    expect(component.online).toBeTrue();
  }));

  it('should check connection when app starts', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'checkConnection').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.checkConnection).toHaveBeenCalled();
  }));

  it('should start watching connection when app starts', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const originalListener = window.navigator['connection'].onchange;
    component.ngOnInit();
    fixture.detectChanges();
    expect(originalListener).not.toEqual(
      window.navigator['connection'].onchange
    );
  }));
});
