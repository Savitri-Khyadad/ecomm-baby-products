import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  // isLoggedIn$!: Observable<boolean>;
  isLoggedin = false;


  constructor(private router: Router,public userService: UserService) {
  }

  ngOnInit(): void {

  }
  title = 'babysworld';

  navbarOpen = false;

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
