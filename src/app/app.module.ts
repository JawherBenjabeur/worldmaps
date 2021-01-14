import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './fragments/navbar/navbar.component';

import { RegionsComponent } from './components/regions/regions.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryM } from './models/country/country';
import { PaysComponent } from './components/pays/pays.component';
import { CountriesService } from './services/countries.service';
import { RegionLisComponent } from './region-lis/region-lis.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    RegionsComponent,
    HomeComponent,
    DetailsComponent,
    PaysComponent,
    RegionLisComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
