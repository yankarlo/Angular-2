import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()

export class ApiOservable {
    constructor(private http: Http) {

    }

    getCourses() {
        const url = '/data/info.json';

        return this.http.get(url)
        .map(
            (response: Response) => response.json()
        );
    }
}

