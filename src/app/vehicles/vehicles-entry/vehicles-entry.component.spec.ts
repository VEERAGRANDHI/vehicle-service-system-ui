import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesEntryComponent } from './vehicles-entry.component';

describe('VehiclesEntryComponent', () => {
  let component: VehiclesEntryComponent;
  let fixture: ComponentFixture<VehiclesEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
