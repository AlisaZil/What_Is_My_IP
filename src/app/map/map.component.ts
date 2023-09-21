import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() cords: [number, number] = [0, 0];
  
  private map: any;
  
  private initMap(): void {
    this.map = L.map('map').setView(this.cords, 10);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const marker = L.marker(this.cords);
    marker.addTo(this.map)
    tiles.addTo(this.map);

  }


  ngAfterViewInit(): void { 
    this.initMap();
  }
}
