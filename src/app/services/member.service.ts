import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MembersService {
    public static events = {};

    constructor(private http: HttpClient) {}

    members() {
        return this.http.get('members/a');
    }
}
