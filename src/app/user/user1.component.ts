import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  template:`<div class="container">
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <h2 class="inactive underlineHover">Login</h2>
      <router-outlet></router-outlet>
    </div>
  </div>
</div>`,
  styleUrls: ['./user.component.css']
})
export class User1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
