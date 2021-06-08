import { Component, OnInit } from '@angular/core';
import {CarouselComponent} from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  advice = {
    advice: "",
    id: '0'
  };
  constructor() { }

  ngOnInit(): void {
    this.getAdvice(this.advice.id);
    setInterval(() => this.getAdvice(this.advice.id), 1210000000);
  }

  getAdvice = async (id: string = '0') => {
    await fetch(`http://localhost:3000/ped/${id}`)
    .then(async (res) => {
      if (res.status === 200) {
        const content = await res.json();
        this.advice.advice = content.advice;
        this.advice.id = content._id.toString();
        console.log(this.advice)
      }
    })
    .catch(err => console.log(err));
  }

}
