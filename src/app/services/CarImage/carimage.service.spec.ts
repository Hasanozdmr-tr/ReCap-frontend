import { TestBed } from '@angular/core/testing';

import { CarimageService } from './carImage.service';

describe('CarimageService', () => {
  let service: CarimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
