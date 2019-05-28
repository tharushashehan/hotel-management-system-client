import { Component } from '@angular/core';
import { RoomService } from './room.service';

@Component({
  templateUrl: 'admin-room-create.component.html'
})

export class AdminRoomCreateComponent {


  title = 'Angular Form Validation Tutorial';
  todaydate;
  componentproperty;
  constructor(private room: RoomService) { }

  ngOnInit() {
    console.log(this.room.getUsers());
  }

  onClickSubmit(data) {
    alert('Entered Email id : ' + data.emailid);
  }

}
