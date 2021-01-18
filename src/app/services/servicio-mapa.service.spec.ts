import { TestBed } from '@angular/core/testing';

import { ServicioMapaService } from './servicio-mapa.service';

describe('ServicioMapaService', () => {
  let service: ServicioMapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
