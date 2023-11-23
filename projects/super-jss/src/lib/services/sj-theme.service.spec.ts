import { TestBed } from '@angular/core/testing';

import { SjThemeService } from './sj-theme.service';

describe('SjThemeServiceService', () => {
  let service: SjThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SjThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
