import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaMarcadorComponent } from './pages/mapa-marcador/mapa-marcador.component';
import { FormMarkerComponent } from './pages/form-marker/form-marker.component';

const routes: Routes = [
  { path: 'home', component: MapaMarcadorComponent },
  { path: 'formMarker', component: FormMarkerComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
