import { Component, OnInit, Input } from '@angular/core';
import { TrainingTemplate } from '../training-templates/training-template.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styles: []
})
export class TrainingsComponent implements OnInit {

  addFlag = false;
  templateId: number;
  @Input() template: TrainingTemplate;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.trainingService.setTrainings(this.template);
  }
}
