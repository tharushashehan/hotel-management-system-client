import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'admin-room-create.component.html'
})

export class AdminRoomCreateComponent implements OnInit {

  title = 'Create room';
  createRoom: FormGroup;
  submitted = false;
  loading = false;
  error: string;

  rooms_data = [];

  constructor(private room: RoomService, private router: Router) {
  }

  ngOnInit() {

    this.room.getRooms()
        .pipe(first())
        .subscribe(users => this.rooms_data = users);

    this.createRoom = new FormGroup({
      room_id: new FormControl('', Validators.compose([
        Validators.required
      ])),
      room_no: new FormControl('', Validators.compose([
        Validators.required
      ])),
      room_type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      description: new FormControl('', Validators.compose([])),
      room_image: new FormControl(),
      price_pd: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.createRoom.controls; }

  onClickSubmit(roomdata) {


    this.submitted = true;

    // stop here if form is invalid
    if (this.createRoom.invalid) {
      return;
    } else {

      this.loading = true;
      this.room.submitRoom(roomdata)
          .pipe(first())
          .subscribe(
              data => {
                this.router.navigate(['/rooms'], { queryParams: { registered: true }});
              },
              error => {
                this.error = error;
                this.loading = false;
              });
    }
  }

}
