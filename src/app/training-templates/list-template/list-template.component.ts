import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TemplateService } from '../template.service';
import { TrainingTemplate } from '../training-template.model';

@Component({
  selector: 'app-list-template',
  templateUrl: './list-template.component.html',
  styles: []
})
export class ListTemplateComponent implements OnInit {

  templates: TrainingTemplate[] = [];

  constructor(private templateService: TemplateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.templates = this.templateService.getTemplates();

    this.templateService.templateListChanged.subscribe(
      (templates: TrainingTemplate[]) => {
        this.templates = templates;
      }
    )
  }

  onAdd() {
    this.router.navigate(['add-template'])
  }

  onManageTraining(id: number) {
    this.router.navigate([id, 'manage-trainings'], { relativeTo: this.route });
  }

  onEdit(id: number) {

  }

  onDelete(id: number) {
    this.templateService.deleteTemplate(id);
  }
}
