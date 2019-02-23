import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { EnvironmentService } from './shared/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'training';

  constructor(private environment: EnvironmentService){}

  ngOnInit() {
    firebase.initializeApp(
      this.environment.config
    );
  }
}
