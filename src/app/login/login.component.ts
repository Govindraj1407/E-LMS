import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/lib/services/user-service';
import { User } from 'src/lib/models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userData: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.userService.verifyUser(this.username, this.password).subscribe(userData => {
      this.userData = userData;
    });
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    this.userService.verifyUser(this.username, this.password).subscribe((userData: User) => {
      if (userData.userId !== null) {
        sessionStorage.setItem("user-session", JSON.stringify(userData));
        this.router.navigate(["/dashboard"]);
      }
      else{
        this.password = "";
      }      
    }, (error: HttpErrorResponse) => {
      this.password = "";
      this.flashMessage.show("Password incorrect", {cssClass: 'alert-danger', timeout: 5000});
    });


  }


}
