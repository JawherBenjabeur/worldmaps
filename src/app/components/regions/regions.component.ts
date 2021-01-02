import { Component, OnInit } from '@angular/core';
import { CountryM } from 'src/app/models/country/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  countries: CountryM[];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.getCountries();
    console.log(this.countries);
  }


}
