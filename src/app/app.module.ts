import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { CourseEditorComponent } from './InstructorDashboard/course-editor/course-editor.component';
import { ManageStudentsComponent } from './InstructorDashboard/manage-students/manage-students.component';
import { AppConstants } from './shared/constansts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DatepickerModule } from 'ng2-datepicker';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { ResourceListsComponent } from './InstructorDashboard/resource-lists/resource-lists.component';
import { UserEditorComponent } from './InstructorDashboard/resource-lists/user-editor/user-editor.component';
import { CourseReaderComponent } from './course-reader/course-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    CourseEditorComponent,
    ManageStudentsComponent,
    SpinnerComponent,
    ResourceListsComponent,
    UserEditorComponent,
    CourseReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,RouterModule,
    FlashMessagesModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    DatepickerModule
  ],
  providers: [DatePipe, AppConstants, {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
