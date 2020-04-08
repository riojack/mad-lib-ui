import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMadLibComponent } from './create-mad-lib.component';

describe('CreateMadLibComponent', () => {
  let component: CreateMadLibComponent;
  let fixture: ComponentFixture<CreateMadLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMadLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
