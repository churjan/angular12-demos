import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=775db8ade805491e9830fa70d02f0605'
  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=775db8ade805491e9830fa70d02f0605'

  constructor(private _http:HttpClient) { }

  topHeadlines():Observable<any>{
    return this._http.get(this.topNews)
  }
  techHeadlines():Observable<any>{
    return this._http.get(this.techNews)
  }

}
