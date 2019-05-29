import { Component } from '@angular/core';
import { RoomService } from './room.service';

@Component({
  templateUrl: 'admin-room-create.component.html'
})

export class AdminRoomCreateComponent {

  constructor(private room: RoomService) {

  }

  ngOnInit() {
    console.log(this.room.getUsers());
  }

  onClickSubmit(data) {
    this.room.submitUser(data);

  }

}
