import { TestBed, inject } from '@angular/core/testing';

import { GetWinnersServiceService } from './get-winners-service.service';

describe('GetWinnersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWinnersServiceService]
    });
  });

  it('should ...', inject([GetWinnersServiceService], (service: GetWinnersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
