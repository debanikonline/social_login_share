import { TestBed, inject } from '@angular/core/testing';

import { AuthServService } from './auth-serv.service';

describe('AuthServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServService]
    });
  });

  it('should be created', inject([AuthServService], (service: AuthServService) => {
    expect(service).toBeTruthy();
  }));
});
