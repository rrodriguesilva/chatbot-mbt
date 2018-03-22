import { Component, OnInit } from '@angular/core';
import { HomeService, Questions, AlertApi } from '../../services/home.service';
import 'rxjs/add/observable/throw';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: Questions;
  alertApi: AlertApi;
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getQuestions().subscribe((data: Questions) => this.questions = data,
  error => console.error(error));

    this._homeService.getAlertApi().subscribe((data: AlertApi) => this.alertApi = data,
  error => console.error(error));

  }

}
