import {Component} from '@angular/core';

import{Course} from '../common/course';

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
  `
})

export class CoursesComponent {
  title: string = 'Cursos disponibles'
  courses: Course [] = COURSES;
}