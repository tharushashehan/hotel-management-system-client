import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateRoomComponent } from './admin-create-room.component';

describe('AdminCreateRoomComponent', () => {
  let component: AdminCreateRoomComponent;
  let fixture: ComponentFixture<AdminCreateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
