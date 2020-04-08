import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMadLibsComponent } from './view-mad-libs.component';

describe('ViewMadLibsComponent', () => {
  let component: ViewMadLibsComponent;
  let fixture: ComponentFixture<ViewMadLibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMadLibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMadLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
