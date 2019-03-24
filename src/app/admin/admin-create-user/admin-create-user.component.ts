import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})
export class AdminCreateUserComponent implements OnInit {

  public user: any;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private http: Http) {

    this.user = {
      userId: "",
      userFName: "",
      userLName: "",
      userNIC: "",
      userEmail: "",
      userType: "",
      userAddrs: "",
      userPassword: ""
    };
  }

  ngOnInit() {
    console.log("this is the AdminCreateUserComponent");
  }

  onSubmit() {
    console.log(this.user);
    this.http.post("http://localhost:8080/user/create", this.user)
      .subscribe();
  }

  onClear() {
    this.user = {
      userId: null,
      userFName: null,
      userLName: null,
      userNIC: null,
      userEmail: null,
      userType: null,
      userAddrs: null,
      userPassword: null
    };
    this.imagePath = null;
    this.imgURL = null;
    this.message = null;
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


}
