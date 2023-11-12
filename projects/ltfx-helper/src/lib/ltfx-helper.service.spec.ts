import { TestBed } from '@angular/core/testing';

import { LtfxHelperService } from './ltfx-helper.service';

describe('LtfxHelperService', () => {
  let service: LtfxHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtfxHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
