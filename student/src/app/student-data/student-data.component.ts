import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  stuCount: number = 0;
  stuName: String;
  stuCity: String;
  successMessage: String
  successFlag: boolean = true;
  addStudentEnable: boolean = true;
  studentList: Student[] = [];
  failureFlag: boolean = true;
  failureMessage: String;
  constructor() {

    this.studentList.push(new Student(this.stuCount++, "ram", "ranchi"));
    this.studentList.push(new Student(this.stuCount++, "karan", "ranchi"));
    console.log(this.studentList);
  }

  ngOnInit(): void {
  }
  submitData(): void {

    if (this.stuName && this.stuCity) {

      this.studentList.push(new Student(this.stuCount++, this.stuName, this.stuCity));
      console.log(this.studentList);

      this.successMessage = this.stuName + ' is added successfully';

      this.addStudentEnable = false;
      setTimeout(() => this.addStudentEnable = true, 1000);

      this.stuName = '';
      this.stuCity = '';

      
      this.successFlag = false;
      this.failureFlag = true;
    } else {
      this.failureMessage = !this.stuName ? 'Student name is required' : 'Student city is required';
      this.successFlag = true;
      this.failureFlag = false;
    }
  }
}
