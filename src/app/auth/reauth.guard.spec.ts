import { TestBed, async, inject } from '@angular/core/testing';

import { ReauthGuard } from './reauth.guard';

describe('ReauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReauthGuard]
    });
  });

  it('should ...', inject([ReauthGuard], (guard: ReauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
