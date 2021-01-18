import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaMarcadorComponent } from './mapa-marcador.component';

describe('MapaMarcadorComponent', () => {
  let component: MapaMarcadorComponent;
  let fixture: ComponentFixture<MapaMarcadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaMarcadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
