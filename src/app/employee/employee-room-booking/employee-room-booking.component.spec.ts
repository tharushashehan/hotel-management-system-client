import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoomBookingComponent } from './employee-room-booking.component';

describe('EmployeeRoomBookingComponent', () => {
  let component: EmployeeRoomBookingComponent;
  let fixture: ComponentFixture<EmployeeRoomBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoomBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
