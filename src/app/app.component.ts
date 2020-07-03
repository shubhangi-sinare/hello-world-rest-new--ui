import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-full-rest';
  public inputText : string;
  public result :any;

  constructor(private service: AppService) {
    
  }
  getDetails() {
    return this.service.getDetailsData(this.inputText)
    .subscribe(data =>
       {
         this.result =data
      });
    //'Hello ' +this.inputText;
  }
}
