import { Component, Input } from '@angular/core';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  
  @Input() ipObj: any;

  public ip: string|undefined = undefined;
  public location: string|undefined = undefined;
  public timeZone: string | undefined = undefined;
  
  public operatingSystem: string | undefined = undefined;
  public ISP: string | undefined = undefined;
  public connectionType: string | undefined = undefined;

  ngOnChanges(): void {
    this.ip = this.ipObj.ip;
    this.location = `${this.ipObj.location.city}, ${this.ipObj.location.country}`;
    this.timeZone = this.ipObj.location.timezone;

    this.operatingSystem = this.getUserOperatingSystem(navigator.appVersion);
    this.ISP = this.ipObj.as.name;
    this.connectionType = this.ipObj.as.type
    console.log(this.ipObj);
    
  }

  getUserOperatingSystem(operatingSystem: string) {
    if (operatingSystem.includes('Windows')) {
      return 'Windows';
    }
    if (operatingSystem.includes('Mac')) {
      return 'Mac';
    }
    return undefined;
  }

}
