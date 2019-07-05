import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private room: RoomService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
    if (this.route.snapshot.queryParamMap.get('registered')) {
      this.toastr.success('Room created successfully', 'Success!');
      this.router.navigate(['/admin/rooms/create']);
  }
  }

  ngOnInit() {

    this.room.getRooms()
        .pipe(first())
        .subscribe(users => this.rooms_data = users);

    this.createRoom = new FormGroup({
      roomNo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      roomType: new FormControl('', Validators.compose([
        Validators.required
      ])),
      roomDiscription: new FormControl('', Validators.compose([])),
      // roomImage: new FormControl(),
      roomPrice: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.createRoom.controls; }

  onClickSubmit(roomdata) {
console.log(roomdata);

    roomdata.roomAvailability = true;
    this.submitted = true;

    // stop here if form is invalid
    if (this.createRoom.invalid) {
      return;
    } else {

      this.loading = true;
      this.room.submitRoom(roomdata)
          .pipe(first())
          .subscribe(
              async data => {
                await this.router.navigate(['/admin/rooms/create'], { queryParams: { registered: true }});
                window.location.reload();
              },
              error => {
                this.toastr.error('Can not create room', 'Error!');
                this.error = error;
                this.loading = false;
              });
    }
  }

}
