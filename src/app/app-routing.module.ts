import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseReaderComponent } from './course-reader/course-reader.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CourseEditorComponent } from './InstructorDashboard/course-editor/course-editor.component';
import { ManageStudentsComponent } from './InstructorDashboard/manage-students/manage-students.component';
import { ResourceListsComponent } from './InstructorDashboard/resource-lists/resource-lists.component';
import { UserEditorComponent } from './InstructorDashboard/resource-lists/user-editor/user-editor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'courseeditor',
    component: CourseEditorComponent
  },
  {
    path:'managestudents',
    component: ManageStudentsComponent
  },
  {
    path:'resourcelists',
    component: ResourceListsComponent
  },
  {
    path:'user',
    component: UserEditorComponent
  },
  {
    path:'course-reader',
    component: CourseReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
