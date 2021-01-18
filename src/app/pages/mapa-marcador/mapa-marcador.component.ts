import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ServicioMapaService } from '../../services/servicio-mapa.service';
import { APITemperaturaByCity } from '../../models/ApiTemperaturaByCity';
import { Marcadores } from '../../models/Marcadores';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LocalStorageService } from 'src/app/services/LocalStorageService';
@Component({
  selector: 'app-mapa-marcador',
  templateUrl: './mapa-marcador.component.html',
  styleUrls: ['./mapa-marcador.component.css'],
})
export class MapaMarcadorComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;


  markertList: Marcadores[];

  datoCiudad: APITemperaturaByCity;


  constructor(private api: ServicioMapaService,private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.setCurrentLocation();
    this.getDatosMarker();
  }

  private getDatosMarker() {
    this.markertList=this.localStorageService.getLocalStorage();
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

  

  public clickedMarker(marcador: string) {
    this.api.getTemperaturaMarcador(marcador).subscribe((post) => {
      this.datoCiudad =post;
    
    });
  }
}
