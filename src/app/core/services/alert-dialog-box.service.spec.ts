import { TestBed } from '@angular/core/testing';

import { AlertDialogBoxService } from './alert-dialog-box.service';

describe('AlertDialogBoxService', () => {
  let service: AlertDialogBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDialogBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
