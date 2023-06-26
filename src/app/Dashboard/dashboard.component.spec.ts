import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs-compat';
import { CourseService } from 'src/lib/services/course-service';
import { HttpServiceMock } from 'src/lib/test-mocks/http.service';
import { RouterMock } from 'src/lib/test-mocks/routerMock';
import { AppConstants } from '../shared/constansts';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let flashMessage;
  let injector: TestBed;
  let store = {};
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [{ provide: HttpClient, useClass: HttpServiceMock },
        { provide: Router, useClass: RouterMock },
        CourseService,FlashMessagesService, AppConstants, DatePipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    // .compileComponents();
    

  }));

  beforeEach(() => {    
    injector = getTestBed();
    fixture = TestBed.createComponent(DashboardComponent);
    flashMessage= TestBed.inject(FlashMessagesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call getCourse() when user is admin on ngOnInit lifecycle hook is triggered`, () => {
    // Arrange
    const getCourseSpy = spyOn(component, 'getCourse');
    //sessionStorage.setItem("user-session", JSON.stringify({userId: "cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302", role:"Admin"}));
    const store = {
      "user-session" : JSON.stringify({userId: "cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302", role:"Admin"})
    };
    spyOn(sessionStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(getCourseSpy).toHaveBeenCalled();
    expect(component.title).toBe("Admin Dashboard");
  });

  it(`should call getUserCourses() when user is student on ngOnInit lifecycle hook is triggered`, () => {
    // Arrange
    const getCourseSpy = spyOn(component, 'getUserCourses');
    // sessionStorage.setItem("user-session", JSON.stringify({userId: "cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302", role:"Student"}));
    const store = {
      "user-session" : JSON.stringify({userId: "cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302", role:"Student"})
    };
    spyOn(sessionStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(getCourseSpy).toHaveBeenCalled();
    expect(component.title).toBe("Student Dashboard");
  });

  it(`should call getCourse() when user is not student on ngOnInit lifecycle hook is triggered`, () => {
    // Arrange
    const getCourseSpy = spyOn(component, 'getCourse');
    //sessionStorage.setItem("user-session", JSON.stringify({userId: "cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302", role:"Instructor"}));
    const store = {
      "user-session" : null
    };
    spyOn(sessionStorage, 'getItem').and.callFake((key) => {
      return store[key];
    });

    // Act
    component.ngOnInit();

    // Assert
    expect(getCourseSpy).toHaveBeenCalled();
    expect(component.title).toBe("Instructor Dashboard");
  });

  // it(`should call deleteCourse() on onDelete`, () => {
  //   // Arrange
  //   const deleteCourseSpy = spyOn(component.courseService, 'deleteCourse').and.returnValue(Observable.of(""));    
  //   spyOn(component.flashMessage, 'show').and.callThrough();
  //   const ngOnInitSpy = spyOn(component, 'ngOnInit');

  //   // Act
  //   component.onDelete("cf28d5ea-1fb7-4b4a-a456-d9e08a4d1302");

  //   // Assert
  //   expect(deleteCourseSpy).toHaveBeenCalled();
  //   expect(ngOnInitSpy).toHaveBeenCalled();
  // });
});
