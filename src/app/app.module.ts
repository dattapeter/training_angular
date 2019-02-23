import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AddTrainingComponent } from './trainings/add-training/add-training.component';
import { TrainingListComponent } from './trainings/training-list/training-list.component';
import { TrainingService } from './trainings/training.service';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { Error404Component } from './error404/error404.component';
import { TrainingTemplatesComponent } from './training-templates/training-templates.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateService } from './training-templates/template.service';
import { EditTemplateComponent } from './training-templates/list-template/edit-template/edit-template.component';
import { AddTemplateComponent } from './training-templates/add-template/add-template.component';
import { ListTemplateComponent } from './training-templates/list-template/list-template.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentListComponent } from './assignments/assignment-list/assignment-list.component';
import { ManageTrainingsComponent } from './training-templates/list-template/manage-trainings/manage-trainings.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { EnvironmentService } from './shared/environment.service';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TrainingsComponent,
    AddTrainingComponent,
    TrainingListComponent,
    SigninComponent,
    SignupComponent,
    Error404Component,
    TrainingTemplatesComponent,
    EditTemplateComponent,
    AddTemplateComponent,
    ListTemplateComponent,
    AssignmentsComponent,
    AssignmentListComponent,
    ManageTrainingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ TrainingService, TemplateService, AuthService, 
                AuthGuard, EnvironmentService,
                // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

              ],
  bootstrap: [AppComponent]
})

export class AppModule { }
