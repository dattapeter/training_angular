import { Training } from './training.model';
import { Subject } from 'rxjs';

import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { TemplateService } from '../training-templates/template.service';

@Injectable()
export class TrainingService {

    constructor(private templateService: TemplateService) {}
 
    public trainingListChanged = new Subject();

    private trainingList: Training [] = []

    getTrainingList(templateId: number): Training [] {
        const trainingTemplate = this.templateService.getTemplate(templateId);
        if(trainingTemplate['trainings']){
            return trainingTemplate.trainings;
        } else{
            return []
        }

    }

    addTraining(templateId: number,training: Training) {
        const trainingTemplate = this.templateService.getTemplate(templateId);
        if(trainingTemplate['trainings']){
            this.templateService.getTemplate(templateId)['trainings'].push(training);
        } else{
            trainingTemplate.trainings = [training]
        }
        this.trainingListChanged.next();
    }

    deleteTraining(templateId: number, training: Training){
        const trainingTemplate = this.templateService.getTemplate(templateId);
        console.log(trainingTemplate);
        const index = trainingTemplate.trainings.findIndex
                    (t => t.topic === training.topic && t.duration == training.duration)
        trainingTemplate.trainings.splice(index, 1);
        this.trainingListChanged.next();
    }
}