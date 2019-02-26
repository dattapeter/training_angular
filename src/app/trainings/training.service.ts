import { Training } from './training.model';
import { Subject } from 'rxjs';

import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { TrainingTemplate } from '../training-templates/training-template.model';


@Injectable()
export class TrainingService {

    constructor() {}
 
    public trainingListChanged = new Subject();
    private trainings: Training[] = [];

    setTrainings(template: TrainingTemplate) {
        this.trainings = template['trainings'] ? [...template.trainings] : [];
    }

    getTrainingList(): Training[] {
        return this.trainings;
    };

    addTraining(training: Training) {
        this.trainings.push(training);
        this.trainingListChanged.next();
    }

    deleteTraining(training: Training){
        const index = this.trainings.findIndex
                    (t => t.topic === training.topic && t.duration == training.duration)
        this.trainings.splice(index, 1);
        this.trainingListChanged.next();
    }

}