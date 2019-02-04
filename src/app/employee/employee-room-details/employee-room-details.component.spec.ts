import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoomDetailsComponent } from './employee-room-details.component';

describe('EmployeeRoomDetailsComponent', () => {
  let component: EmployeeRoomDetailsComponent;
  let fixture: ComponentFixture<EmployeeRoomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRoomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
