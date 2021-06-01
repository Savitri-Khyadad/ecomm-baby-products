import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <router-outlet></router-outlet>
    </div>
  </div>
`,
  styleUrls: ['./style.css']
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
