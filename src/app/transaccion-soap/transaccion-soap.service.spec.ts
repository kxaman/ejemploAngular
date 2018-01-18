import { TestBed, inject } from '@angular/core/testing';

import { TransaccionSoapService } from './transaccion-soap.service';

describe('TransaccionSoapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransaccionSoapService]
    });
  });

  it('should be created', inject([TransaccionSoapService], (service: TransaccionSoapService) => {
    expect(service).toBeTruthy();
  }));
});
