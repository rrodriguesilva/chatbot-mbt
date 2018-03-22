import { Component, OnInit } from '@angular/core';
import { HomeService, Questions } from '../../services/home.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: Questions;
  constructor(private _questions: HomeService) { }

  ngOnInit() {
    this._questions.getQuestions().subscribe((data: Questions) => this.questions = data,
  error => console.error(error));
  }

}
