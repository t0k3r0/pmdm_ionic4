import { TestBed } from '@angular/core/testing';

import { GestionSucesosService } from './gestion-sucesos.service';

describe('GestionSucesosService', () => {
  let service: GestionSucesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSucesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
