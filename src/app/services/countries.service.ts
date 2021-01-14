import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryM } from '../models/country/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apuUrl='https://restcountries.eu/rest/v2/all'
  countries: CountryM[];
  constructor(private http: HttpClient) {}
  getHttpCountries():Observable<any[]> {
   
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountries():CountryM[]{
    let countr=[];
    this.countries=[];
    this.getHttpCountries().subscribe(
      (countries)=>{
        countries.forEach(country => {
          countr.push(new CountryM(country['name'],country['nativeName'],country['capital'],
          country['region'],country['population'],country['area'],country['flag'],[]))
          console.log(country);
        });
        console.log(countries);
        console.log(this.countries);
      },
      (error)=>{
        alert('erreur');
      }
    );
      
      return countr;
  }

}
