import { Component, OnInit } from '@angular/core';
import { CountryM } from 'src/app/models/country/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countries: CountryM[];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    // this.countriesService.getHttpCountries().subscribe(
    //   (countriess)=>{
    //     //console.log(countries);
    //     this.countries = countriess;
    //     console.log(this.countries);
    //   },
    //   (error)=>{
    //     alert('erreur');
    //   }
    // );
    this.countries = this.countriesService.getCountries();
    console.log(this.countries);
  }

}
