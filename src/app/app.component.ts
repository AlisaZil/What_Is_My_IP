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
      this.cords = [this.ipObj?.location.latitude, this.ipObj?.location.longitude];
    })
  }

  checkIfLatin(e:any){
    const regexp = /[A-z\u00C0-\u00ff]+/g;
    // console.log(i18n.detectLanguage(e.target.value);
    
  }
}
