/**
 * Created by niwantha on 5/7/19.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    login(email: String, password: String) {

        console.log(environment.api_url + '/login/auth/' + email + '/' + password);
        return this.http.get<boolean>(environment.api_url + '/login/auth/' + email + '/' + password);
    }
}
