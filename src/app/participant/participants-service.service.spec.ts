import { TestBed } from '@angular/core/testing';

import { ParticipantsService } from './participants-service.service';

describe('ParticipantsServiceService', () => {
  let service: ParticipantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
