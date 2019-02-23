import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../template.service';

@Component({
  selector: 'app-manage-trainings',
  templateUrl: './manage-trainings.component.html',
  styles: []
})
export class ManageTrainingsComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  onUpdate(){
    this.templateService.updateTemplates()
  }
}
