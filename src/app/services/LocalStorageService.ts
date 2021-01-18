import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Marcadores } from '../models/Marcadores';
// key that is used to access the data in local storageconst STORAGE_KEY = 'local_todolist';

@Injectable()
export class LocalStorageService {
    STORAGE_KEY = 'local_todolist';
     anotherTodolist = [];
     markertList: Marcadores[]=[
        {$key:'Santa Cruz de la Sierra, BO',Latitud:-17.8,Longitud:-63.1667,Nombre:'Santa Cruz de la Sierra, BO'},
        {$key:'Cochabamba, BO',Latitud:-17.3895,Longitud:-66.1568,Nombre:'Cochabamba, BO'},
        {$key:'La Paz, BO',Latitud:-16.5,Longitud:-68.15,Nombre:'La Paz, BO'},
        {$key:'Tarija, BO',Latitud:-21.5355,Longitud:-64.7296,Nombre:'Tarija, BO'},
        {$key:'Oruro, BO',Latitud:-17.9833,Longitud:-67.15,Nombre:'Oruro, BO'},
        {$key:'Sucre, BO',Latitud:-19.0333,Longitud:-65.2627,Nombre:'Sucre, BO'},
        {$key:'Trinidad, BO',Latitud:-14.8333,Longitud:-64.9,Nombre:'Trinidad, BO'},
      ];

     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public getLocalStorage(): Marcadores[] {
          this.storage.set(this.STORAGE_KEY, this.markertList);
          return this.markertList;
     }

     public newMarker(marker: Marcadores): void {
        this.markertList= this.storage.get(this.STORAGE_KEY) || [];
        this.markertList.push(marker);
        // insert updated array to local storage
        this.storage.set(this.STORAGE_KEY, this.markertList);
        console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
   }
}