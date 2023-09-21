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
  
  // public operatingSystem: string | undefined = undefined;
  // public ISP: string | undefined = undefined;
  // public connectionType: string | undefined = undefined;

  secondaryValues: { name: string, value: string | undefined }[] = [
  
    {
      name: 'Operating system',
      value: undefined
    },
    {
      name: 'ISP',
      value: undefined
    },
    {
      name: 'Connection type',
      value: undefined
    }

  ]

  ngOnChanges(): void {
    this.ip = this.ipObj.ip;
    this.location = `${this.ipObj.location.city}, ${this.ipObj.location.country}`;
    this.timeZone = this.ipObj.location.timezone;

    this.secondaryValues.forEach((element) => {
      element.name === 'Operating system' ? element.value = this.getUserOperatingSystem(navigator.appVersion) :
        element.name === 'ISP' ? element.value = this.ipObj.as.name :
          element.name === 'Connection type'? element.value = this.ipObj.as.type : false;
    });
  }

  getUserOperatingSystem(operatingSystem: string) :string |undefined {
    if (operatingSystem.includes('Windows')) {
      return 'Windows';
    }
    if (operatingSystem.includes('Mac')) {
      return 'Mac';
    }
    return undefined;
  }

}
