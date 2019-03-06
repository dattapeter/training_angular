import { Component, OnInit } from '@angular/core';
import { Assignment } from '../shared/assignment.model';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styles: []
})
export class AssignmentsComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {

    this.assignmentService.retrieveAssignments(); 

    this.assignmentService.assignmentsChanged 
      .subscribe(
        () => this.assignments = this.assignmentService.getAssignments()
      )
  }

}
