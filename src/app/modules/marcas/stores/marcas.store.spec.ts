import { TestBed } from '@angular/core/testing';

import { MarcasStore } from './marcas.store';

describe('MarcasService', () => {
  let service: MarcasStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcasStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
