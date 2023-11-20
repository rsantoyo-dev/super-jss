import { TestBed } from '@angular/core/testing';

import { SjThemeServiceService } from './sj-theme.service';

describe('SjThemeServiceService', () => {
  let service: SjThemeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SjThemeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
