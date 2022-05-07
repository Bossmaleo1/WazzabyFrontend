import { TestBed } from '@angular/core/testing';

import { PublicMessageService } from './public-message.service';

describe('PublicMessageService', () => {
  let service: PublicMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
