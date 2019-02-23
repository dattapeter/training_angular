import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TemplateService } from '../../template.service';
import { TrainingTemplate } from '../../training-template.model';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styles: []
})
export class EditTemplateComponent implements OnInit {
  
  template: TrainingTemplate;
  
  constructor(private route: ActivatedRoute,
              private templateService: TemplateService) { }

  ngOnInit() {
 
  }
}
