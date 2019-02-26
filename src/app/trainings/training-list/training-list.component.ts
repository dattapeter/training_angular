import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Training } from '../training.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TrainingTemplate } from 'src/app/training-templates/training-template.model';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styles: []
})

export class TrainingListComponent implements OnInit, OnDestroy {

  trainings: Training[] = [];
  private trainingListSubscription: Subscription;

  constructor(private trainigService: TrainingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.trainings = this.trainigService.getTrainingList();
    this.trainingListSubscription = this.trainigService.trainingListChanged
      .subscribe(
        () => {
          this.trainings = this.trainigService.getTrainingList();
        }
      )
  }

  deleteTraining(training: Training) {
    this.trainigService.deleteTraining(training);
  }

  ngOnDestroy() {
    this.trainingListSubscription.unsubscribe();
  }
}
