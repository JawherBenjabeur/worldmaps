import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionsComponent } from './components/regions/regions.component';
import { HomeComponent } from './components/home/home.component';
import { PaysComponent } from './components/pays/pays.component';
import { RegionLisComponent } from './region-lis/region-lis.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [ 
 { path :'regions' , component : RegionsComponent } ,
 { path : 'home' , component : HomeComponent} ,
 { path : 'pays' , component : PaysComponent} ,
 { path : 'countries/:region' , component : RegionLisComponent} ,
 { path : 'country/:pay' , component : DetailsComponent} ,
 
 
 { path : '' ,component : HomeComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
