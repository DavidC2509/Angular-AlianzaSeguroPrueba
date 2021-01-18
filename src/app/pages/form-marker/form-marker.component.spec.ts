import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarkerComponent } from './form-marker.component';

describe('FormMarkerComponent', () => {
  let component: FormMarkerComponent;
  let fixture: ComponentFixture<FormMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
