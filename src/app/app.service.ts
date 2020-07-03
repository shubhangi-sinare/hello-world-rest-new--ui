import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getDetailsData(inputText){
    //return "Hello " +inputText;
    return this.http.get<any>('/hello-world-rest-api/api/hello-world?inputValue='+inputText
    ,{'responseType': 'text' as 'json'});
  }
}
