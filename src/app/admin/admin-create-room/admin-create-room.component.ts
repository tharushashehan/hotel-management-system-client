import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-create-room',
  templateUrl: './admin-create-room.component.html',
  styleUrls: ['./admin-create-room.component.css']
})
export class AdminCreateRoomComponent implements OnInit {

  roomType: any;
  public data: any;
  roomTypeSelected: number;
  imgURL: any;
  public message: string;
  public imagePath;

  constructor(private http: Http) {
    this.roomType = [
      { id: 1, name: "Single" },
      { id: 2, name: "Double" },
      { id: 3, name: "Queen" },
      { id: 4, name: "King" }
    ];
    this.data = {
      roomId: "",
      roomNo: "",
      userID: "",
      discription : "",
      price: 0
    };

  }

  ngOnInit() {
  }

  onClear() {
    this.data = {
      roomId: "",
      roomNo: "",
      userID: ""
    };
    this.roomTypeSelected = null;
    this.data.roomId = null;
    this.data.roomNo = null;
    this.data.r = null;
    this.imgURL = null;
    this.message = null;
    this.imagePath = null;
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }


    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  onSubmit() {
    this.http.post("http://someurl", JSON.stringify(this.data))
      .subscribe();
  }

}
