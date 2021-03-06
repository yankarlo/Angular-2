import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from '../common/course';

@Injectable()

export class ApiService {
    constructor( private http: Http) {

    }
    // Peticion hhtp 
    getCourses() {
        let url = '/data/info.json';

        return this.http.get(url)
        .toPromise()
        .then( response => response.json())
        .catch(this.error);
    }

    getCoursesSlow(): Promise<Course[]> {
        return new Promise<Course[]>(
            resolve => setTimeout(resolve, 2000))
            .then( () => this.getCourses());

    }

    getCourse(id: number) {
        return this.getCourses()
        .then( courses => courses.find( (course: any) => course.id === id));
    }
    // Control de error de peticion

    error(error: any) {
        return Promise.reject(error.message || error);
    }
}
