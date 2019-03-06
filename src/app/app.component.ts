import { Component } from '@angular/core';
import { EnvironmentService } from './shared/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'training';

  constructor(private environment: EnvironmentService){}

  ngOnInit() {
  }
}
