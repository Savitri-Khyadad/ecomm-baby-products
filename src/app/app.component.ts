import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
  }
  title = 'babysworld';

  navbarOpen = false;

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
}
