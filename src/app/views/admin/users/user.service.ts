/**
 * Created by niwantha on 5/7/19.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>(environment.api_url + '/users/');
    }

    submitUser($payload) {
        return this.http.post<any>(environment.api_url + '/user/', $payload);
    }

}
