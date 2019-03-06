import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AssignmentComponent } from './assignments/assignment-list/assignment/assignment.component' 
import { AssignmentService } from './shared/assignment.service';
import { TemplateAssignmentComponent } from './training-templates/list-template/template-assignment/template-assignment.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BROWSER_ANIMATIONS_PROVIDERS } from '@angular/platform-browser/animations/src/providers';
import { HomeComponent } from './home/home.component';

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
    AssignmentComponent,
    TemplateAssignmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule 
  ],
  providers: [ TrainingService, TemplateService, AuthService, AssignmentService,
                AuthGuard, EnvironmentService,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

              ],
  bootstrap: [AppComponent]
})

export class AppModule { }
