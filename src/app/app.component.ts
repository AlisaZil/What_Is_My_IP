import { Component } from '@angular/core';
import { ApiServieService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // constructor(private service: ApiServieService) { }
  
  // getIp() {
  //   this.service.getUserIp().subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
