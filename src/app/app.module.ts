import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MapaMarcadorComponent } from './pages/mapa-marcador/mapa-marcador.component';
import { AgmCoreModule } from '@agm/core';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './services/LocalStorageService';
import { FormMarkerComponent } from './pages/form-marker/form-marker.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaMarcadorComponent,
    FormMarkerComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBb5ycpInlmuD4xSTOF1WMmGOCj3uDJYDk'
   })
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
