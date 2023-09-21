import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() cords: [number, number]|undefined = undefined;

  private map: any;

  ngOnChanges(): void {
    if (this.cords) {
      this.initMap();
    }
  }
  
  private initMap(): void {
    
    if (this.cords) {
      this.map = L.map('map').setView(this.cords, 10);
      const marker = L.marker(this.cords);
      marker.addTo(this.map);
    }

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    
    tiles.addTo(this.map);

  }
  
}
