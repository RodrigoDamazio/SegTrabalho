import { TestBed } from '@angular/core/testing';

import { HomeSegtrabService } from './home-segtrab.service';

describe('HomeSegtrabService', () => {
  let service: HomeSegtrabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSegtrabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
