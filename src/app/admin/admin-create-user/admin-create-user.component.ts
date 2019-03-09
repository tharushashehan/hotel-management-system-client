import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})
export class AdminCreateUserComponent implements OnInit {

  public data: any;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private http: Http) {

    this.data = {
      UserId: "",
      UserFName: "",
      UserLName: "",
      UserNIC: "",
      UserEmail: "",
      UserType: "employee",
      UserAddrs: "",
      UserPassWord: ""
    }
  }

  ngOnInit() {
    console.log("this is the AdminCreateUserComponent");
  }




  onSubmit() {
    this.http.post("http://someurl", JSON.stringify(this.data))
      .subscribe();
  }

  onClear() {
    this.data = {
      UserId: "",
      UserFName: "",
      UserLName: "",
      UserNIC: "",
      UserEmail: "",
      UserType: "employee",
      UserAddrs: "",
      UserPassWord: ""
    }
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }


    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


}
