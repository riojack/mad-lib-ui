import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMadLibComponent } from './create-mad-lib.component';
import { MadLibService } from '../mad-lib.service';
import { mock, instance, verify } from 'ts-mockito';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateMadLibComponent', () => {
  let component: CreateMadLibComponent;
  let fixture: ComponentFixture<CreateMadLibComponent>;
  let mockMadLibService: MadLibService;

  beforeEach(() => {
    mockMadLibService = mock(MadLibService);
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        { provide: MadLibService, useValue: instance(mockMadLibService) }
      ],
      declarations: [CreateMadLibComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMadLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the madlib on save click', () => {
    const madLibText: string = 'A ______ thing ______ my teddybear.';

    writeTextToInput(fixture, madLibText);
    clickSaveButton(fixture);

    expect(component.madLibFormControl.value).toEqual(madLibText);
    verify(mockMadLibService.saveMadLib(madLibText)).times(1);
  });
});

const writeTextToInput = (fixture: ComponentFixture<CreateMadLibComponent>, text: string): void => {
  const inputField: HTMLInputElement = fixture.nativeElement.querySelector('input[type="text"]');
  const event: Event = document.createEvent('Event');
  event.initEvent('input', false, false);

  inputField.value = text;
  inputField.dispatchEvent(event);
}

const clickSaveButton = (fixture: ComponentFixture<CreateMadLibComponent>): void => {
  const saveButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
  const event: Event = document.createEvent('Event');
  event.initEvent('click', false, false);

  saveButton.dispatchEvent(event);
}
