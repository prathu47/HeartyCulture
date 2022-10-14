import { TestBed } from '@angular/core/testing';

import { ComboServiceService } from './combo-service.service';

describe('ComboServiceService', () => {
  let service: ComboServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
