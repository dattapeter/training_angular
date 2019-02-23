import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styles: []
})
export class TrainingsComponent implements OnInit {

  addFlag = false;
  @Input() templateId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.templateId = +params['templateId']
          } 
        )
  }
}
