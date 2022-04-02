import { TestBed } from '@angular/core/testing';

import { MessageDialogBoxService } from './message-dialog-box.service';

describe('MessageDialogBoxService', () => {
  let service: MessageDialogBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageDialogBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
