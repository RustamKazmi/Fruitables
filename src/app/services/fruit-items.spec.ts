import { TestBed } from '@angular/core/testing';

import { FruitItems } from './fruit-items';

describe('FruitItems', () => {
  let service: FruitItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
