import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseEditorComponent } from './InstructorDashboard/course-editor/course-editor.component';
import { InstructorDashboardComponent } from './InstructorDashboard/instructordashboard.component';
import { ManageStudentsComponent } from './InstructorDashboard/manage-students/manage-students.component';
import { ResourceListsComponent } from './InstructorDashboard/resource-lists/resource-lists.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'instructordashboard',
    component: InstructorDashboardComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
