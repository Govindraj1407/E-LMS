import { Component, OnInit } from '@angular/core';
import { ICourseData } from 'src/lib/models/course';

@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {

  courses: ICourseData[] = [];

  constructor() { }

  ngOnInit() {
    this.courses.push({courseId: 1, dueDate: new Date('09/06/2023'), progress: 50, status: 'active', title: "Course 1"});
    this.courses.push({courseId: 2, dueDate: new Date('09/06/2023'), progress: 50, status: 'active', title: "Course 2"});
  }

}