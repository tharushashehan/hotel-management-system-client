/**
 * Created by niwantha on 5/7/19.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }


    getLeavs() {
        return this.http.get<any>(environment.api_url + '/leaves/');
    }


    getBookings() {
        return this.http.get<any>(environment.api_url + '/checkin/');
    }


    getRoomDetails() {
        return this.http.get<any>(environment.api_url + '/rooms/');
    }


    submitLeave($payload) {
        return this.http.post<any>(environment.api_url + '/leaves/', $payload);
    }

    submitBooking($payload, $roomID) {
        console.log(environment.api_url + 'room/' + $roomID + '/checkin');
        return this.http.post<any>(environment.api_url + 'room/' + $roomID + '/checkin', $payload);
    }
}
