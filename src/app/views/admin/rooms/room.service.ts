/**
 * Created by niwantha on 5/7/19.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RoomService {
    constructor(private http: HttpClient) {}

    getUsers(){
        return this.http.get<any>('http://ec2-34-221-169-242.us-west-2.compute.amazonaws.com:8080/users/');
    }
}