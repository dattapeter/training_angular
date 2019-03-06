import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { TrainingsComponent } from './trainings/trainings.component';
import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';
import { Error404Component } from './error404/error404.component';
import { TrainingTemplatesComponent } from './training-templates/training-templates.component';
import { EditTemplateComponent } from './training-templates/list-template/edit-template/edit-template.component';
import { AddTemplateComponent } from './training-templates/add-template/add-template.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ManageTrainingsComponent } from './training-templates/list-template/manage-trainings/manage-trainings.component';
import { AuthGuard } from './shared/auth-guard.service';
import { TemplateAssignmentComponent } from './training-templates/list-template/template-assignment/template-assignment.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuard]},
    {path: 'training-templates', component: TrainingTemplatesComponent, canActivate: [AuthGuard]},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'trainings', component: TrainingsComponent},
    {path: 'add-template', component: AddTemplateComponent, canActivate: [AuthGuard]},
    {path: 'training-templates/:templateId/edit', component: EditTemplateComponent, canActivate: [AuthGuard]},
    {path: 'training-templates/:templateId/manage-trainings', component: ManageTrainingsComponent, canActivate: [AuthGuard]},
    {path: 'training-templates/:templateId/template-assignment', component: TemplateAssignmentComponent, canActivate: [AuthGuard]},
    {path: 'not-found', component: Error404Component},
    {path: '**', redirectTo: '/not-found'}
  ]; 
  
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}