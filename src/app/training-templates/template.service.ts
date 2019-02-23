import { TrainingTemplate } from './training-template.model';
import { Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../login/auth.service';

class UserTemplate {
    constructor(
        public userId: string,
        public templates: TrainingTemplate[] 
    ) {}
}


@Injectable()
export class TemplateService {

    public templateListChanged = new Subject();

    private userTemplate = new UserTemplate(this.authService.UID, [])

    constructor(private httpClient: HttpClient,
                private authService: AuthService) {

    }

    getTemplates() {
        this.httpClient.get<UserTemplate>('https://d-training.firebaseio.com/data.json')
        .subscribe(
            response => {
                if(response) {
                    this.userTemplate.templates = response.templates
                    this.templateListChanged.next(this.userTemplate.templates)
                }    
            }
        );
        return this.userTemplate.templates;
    };

    getTemplate(id: number): TrainingTemplate {
        const index = this.userTemplate.templates.findIndex(template => template.id === id);
        return this.userTemplate.templates[index]
    }

    addTemplate(newTemplate: TrainingTemplate) {
        
        this.userTemplate.templates.push(newTemplate);

        this.httpClient.put('https://d-training.firebaseio.com/data.json', this.userTemplate)
            .subscribe(
                response =>  {},
                error => console.log(error)
            )
     };

    updateTemplates(){
        this.httpClient.put('https://d-training.firebaseio.com/data.json', this.userTemplate)
        .subscribe(
            response => {
                this.templateListChanged.next(this.userTemplate)}
        );
    }

    deleteTemplate(id: number) {
        let index: number = this.userTemplate.templates.findIndex(template => template.id === id);
        if (index > -1) {
            this.userTemplate.templates.splice(index, 1);
        }
    };
};