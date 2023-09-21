import { Component } from '@angular/core';
import { ApiServieService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: ApiServieService) { }

  public ipObj: any;
  public cords: [number, number]|undefined = undefined;
  
  ngOnInit(): void {
    this.getIp();
  }

  getIp() {
    this.service.getUserIp().subscribe(res => {
      this.ipObj = res;
      this.cords = [this.ipObj?.location.lat, this.ipObj?.location.lng];
    })
  }
}
