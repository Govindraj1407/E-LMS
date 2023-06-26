import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  isStudent = false;
  isAdmin = false;

  constructor(
    private router: Router
  ) { }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  ngOnInit() {
    this.isStudent = false;
    const user = JSON.parse(sessionStorage.getItem("user-session"));
    if(user?.role === "Student"){
      this.isStudent = true;
    }
    if(user?.role === "Admin"){
      this.isAdmin = true;
    }
  }

  logOut(){
    sessionStorage.removeItem("user-session");
    this.router.navigate(["/login"]);
  }
}
