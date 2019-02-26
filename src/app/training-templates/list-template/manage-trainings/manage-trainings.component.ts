import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../template.service';
import { TrainingTemplate } from '../../training-template.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage-trainings',
  templateUrl: './manage-trainings.component.html',
  styles: []
})
export class ManageTrainingsComponent implements OnInit {

  template: TrainingTemplate;

  constructor(private route: ActivatedRoute,
    private templateService: TemplateService) { }

  ngOnInit() {
    let templateId = this.route.snapshot.params['templateId'];
    this.template = this.templateService.getTemplate(templateId)

    this.route.params
      .subscribe(
        (params: Params) => {
          let templateId = params['templateId'];
          this.template = this.templateService.getTemplate(templateId)
            ;
        }
      )
  }

  onSave() {
    this.templateService.updateTrainings(this.template)
      .subscribe(
        () => console.log('Trainings are saved successfully'),
        e => console.log('Some error occurred')
      )
  }
}

