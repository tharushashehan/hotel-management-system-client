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
        return this.http.get<any>(environment.api_url + '/user/user-list');
    }

    getUser(id) {
        return this.http.get<any>(environment.api_url + '/user//single-user/' + id);
    }

    submitUser($payload) {
        return this.http.post(environment.api_url + '/user/create', $payload);
    }

    deleteUser(id) {
        return this.http.post(environment.api_url + `/user/delete-user/` + id, {});
    }

    updateUser(id, $payload) {
        return this.http.post(environment.api_url + `/user/put-user/` + id, $payload);
    }

}
