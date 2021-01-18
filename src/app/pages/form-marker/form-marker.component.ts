import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-marker',
  templateUrl: './form-marker.component.html',
  styleUrls: ['./form-marker.component.css']
})
export class FormMarkerComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  map;
  mapClickListener;
  zone;
  constructor() { }

  ngOnInit(): void {
    this.setCurrentLocation();

  }
 
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 6;
      });
    }
  }

  public mapReadyHandler(map: google.maps.Map): void {
    this.map = map;
    this.mapClickListener = this.map.addListener('click', (e: google.maps.MouseEvent) => {
        console.log(e.latLng.lat(), e.latLng.lng());
    });
}
}
