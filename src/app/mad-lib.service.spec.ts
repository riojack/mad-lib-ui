import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MadLibService } from './mad-lib.service';

describe('MadLibService', () => {
  let service: MadLibService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MadLibService]
    });

    const injector = getTestBed();
    service = injector.get(MadLibService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should POST the MadLib to /madlib', () => {
    service.saveMadLib({ sentence: "" }).subscribe(() => {});

    const request = httpMock.expectOne('/madlib');
    expect(request.request.method).toBe('POST');
    request.flush({});
  });
});
