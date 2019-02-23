import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Training } from '../training.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styles: []
})

export class TrainingListComponent implements OnInit, OnDestroy {

  templateId: number;
  trainings: Training [] = [];
  private trainingListSubscription: Subscription;

  constructor(private trainigService: TrainingService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) =>  {this.templateId = +params['templateId'] 
      this.trainings = this.trainigService.getTrainingList(this.templateId);
    })

    this.trainingListSubscription = this.trainigService.trainingListChanged
        .subscribe(
          () => {
            this.trainings = this.trainigService.getTrainingList(this.templateId);
          }
        )
  }

  deleteTraining(training: Training){
    this.trainigService.deleteTraining(this.templateId,training);
  }

  ngOnDestroy(){
    this.trainingListSubscription.unsubscribe();
  }

}
