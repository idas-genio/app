/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { InboxService } from './inbox.service';

describe('Service: Inbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboxService]
    });
  });

  it('should ...', inject([InboxService], (service: InboxService) => {
    expect(service).toBeTruthy();
  }));
});
