import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplateService } from '../template.service';
import { TrainingTemplate } from '../training-template.model';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styles: []
})

export class AddTemplateComponent implements OnInit {

  @ViewChild('form') form: NgForm
  @ViewChild('cancel') cancelRef: ElementRef;

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.templateService.addTemplate(
      new TrainingTemplate(
        Math.floor(Math.random() * 10000),
        this.form.value.title,
        this.form.value.description
      )
    );
    this.form.reset();
    this.cancelRef.nativeElement.click();
  }
}
