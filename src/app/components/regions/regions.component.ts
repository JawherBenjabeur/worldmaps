import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { CountryM } from 'src/app/models/country/country';
import { RegionLisComponent } from 'src/app/region-lis/region-lis.component';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  
  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  goRegions(region){
    this.router.navigate(['countries',region])
    
  }

}
