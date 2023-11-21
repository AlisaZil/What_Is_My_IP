import { Component, Input } from '@angular/core';

@Component({
  selector: 'detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  
  @Input() ipObj: any;

  public ip: string|undefined = undefined;
  public city: string|undefined = undefined;
  public country: string | undefined = undefined;


  ngOnChanges(): void {
    this.ip = this.ipObj?.ip;
    this.city = this.ipObj?.city.name;
    this.country = this.ipObj?.country.name + this.ipObj?.country.flag;
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
