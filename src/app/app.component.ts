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
      this.getCords();
    })
  }

  getCords() {
    this.cords = [this.ipObj?.location.lat, this.ipObj?.location.lng];
  }

  getDetailByIP(e: string) {
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    if (regexExp.test(e)) {
      this.service.getUserDetailssByIP(e).subscribe(res => {
        this.ipObj = res;
        this.getCords();
      });
    } else if(e === "") {
      this.getIp();
    }
  }
}
