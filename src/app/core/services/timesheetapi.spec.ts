import { TestBed } from '@angular/core/testing';

import { Timesheetapi } from './timesheetapi';

describe('Timesheetapi', () => {
  let service: Timesheetapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Timesheetapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
