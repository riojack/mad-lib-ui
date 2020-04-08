import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MadLibService } from './mad-lib.service';

describe('MadLibService', () => {
  let service: MadLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MadLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
