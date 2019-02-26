import { TrainingTemplate } from './training-template.model';
import { Subject, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../shared/environment.setting';
import { Environment } from '../shared/environment.setting';
import { TrainingService } from '../trainings/training.service';

@Injectable()
export class TemplateService {

    public templateListChanged = new Subject();

    private templates: TrainingTemplate[] = [];

    constructor(private httpClient: HttpClient,
                private trainingService: TrainingService) {

    }

    getTemplates() {
        this.httpClient.get<TrainingTemplate[]>(`${Environment.url}/templates`)
        .subscribe(
            templates => {
                if(templates) {
                    this.templates = templates
                    this.templateListChanged.next(this.templates)
                }    
            }
        );
        return this.templates;
    };

    addTemplate(newTemplate: TrainingTemplate) {
        this.httpClient.post(`${Environment.url}/add-template`, newTemplate)
            .subscribe(
                (template: TrainingTemplate) =>  this.templates.push(template),
                error => console.log(error)
            )
     };

    deleteTemplate(id: number) {
        let index: number = this.templates.findIndex(template => template._id === id);
        if (index > -1) {
            this.templates.splice(index, 1);
        }
    };

    getTemplate(id: number): TrainingTemplate {
        let index = this.templates.findIndex(template => template._id === id);
        return this.templates[index];
    }

    updateTrainings(modifiedTemplate: TrainingTemplate){
        modifiedTemplate['trainings'] = this.trainingService.getTrainingList();
        return this.httpClient.patch(`${Environment.url}/template/${modifiedTemplate._id}`, modifiedTemplate)
    }
};