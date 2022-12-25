import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable,  throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  // getQuestionJson(){
  //   return this.http.get<any>('http://localhost:3000/questions')
  //   return this.http.get<any>("assets/questions.json");
  // }
  getQuestionsFromApi():Observable<any>{
    return this.http.get<any>('http://localhost:3000/questions').pipe(
      tap ((response) => console.log(response)),
      catchError((error: HttpErrorResponse) => {
        return throwError(error)}
    ));
  }
  }



