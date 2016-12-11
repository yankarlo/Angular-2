import {Component, OnInit} from '@angular/core';
// se comparte componente con coursebox
import{Course} from '../common/course';
import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {ApiOservable} from '../services/apiobservable';
/*
const COURSES: Course[] =[
 {
    id : 1,
    name : 'Angular ',
    image : '/artefactos/angularjs.png',
    price : 100
  },
  {
    id : 2,
    name : 'Python',
    image : '/artefactos/python.png',
    price : 120
  }
]
*/
// En el div se emplea entre corchetes la variable definida en coursebox
@Component({
  selector: 'courses',
  template :
  `
    <h2>{{title}}</h2>
    <div class="courses_list">
        <coursebox
        [course]="course_info"
        *ngFor="let course_info of courses"
        ></coursebox>
    </div>
    <cart></cart>
  `,
  providers: [ApiService, AuthService, ApiOservable]
})

export class CoursesComponent implements OnInit {
  title: string = 'Cursos disponibles';
  courses: Course [];
  // courses: Course [] = COURSES;

  constructor(
    private ApiService: ApiService,
    private auth: AuthService,
    private ApiObservable: ApiOservable) {

  }

  getCourses() {
    /*this.ApiService.getCourses().then(
      courses => this.courses = courses
    );*/

    this.ApiObservable.getCourses().subscribe(
      data => {this.courses = data; },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.auth.check();
    this.getCourses();
  }
}

