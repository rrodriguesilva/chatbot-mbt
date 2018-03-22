import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


export class Questions {
    constructor(public Id: number, public Question: string) {}
}
export class AlertApi {
    constructor(public apimsg: string) {}
}
@Injectable()
export class HomeService {
    private apiUrl = 'http://localhost:8080/';
constructor(private _http: Http) { }

getQuestions(): Observable<Questions> {
    return  this._http.get(this.apiUrl + 'questionsChat/all')
                .map((response: Response) => <Questions>response.json())
                .do(data => JSON.stringify(data))
                .catch(this.handleError);
}

getAlertApi(): Observable<AlertApi> {
    return  this._http.get(this.apiUrl + 'home/alert')
    .map((response: Response) => <AlertApi>response.json())
    .do(data => JSON.stringify(data))
    .catch(this.handleError);
}
private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}

}
