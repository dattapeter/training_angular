import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { Training } from '../training.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styles: []
})
export class AddTrainingComponent implements OnInit {

  @Input() templateId: number;
  @ViewChild('form') form: NgForm;


  constructor(private trainingService: TrainingService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) =>  this.templateId = +params['templateId'] 
        )
  }

  onSubmit(){
    this.trainingService.addTraining(
      this.templateId, new Training(this.form.value.topic,this.form.value.duration)
    );
    this.form.reset();
  }
}
