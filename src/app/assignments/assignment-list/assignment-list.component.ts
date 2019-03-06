import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../../shared/assignment.model';
import { AssignmentService } from '../../shared/assignment.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styles: []
})
export class AssignmentListComponent implements OnInit {

  @Input() assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
  }

  OnStatusUpdate(index: number, status: string) {
    this.assignments[index].status = status;
  }

}
