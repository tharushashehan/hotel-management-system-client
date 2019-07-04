/**
 * Created by niwantha on 5/7/19.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable()
export class RoomService {
    constructor(private http: HttpClient) {}


    getRooms() {
        return this.http.get<any>(environment.api_url + '/rooms/');
    }

    submitRoom($payload) {
        return this.http.post<any>(environment.api_url + '/room/', $payload);
    }
}
