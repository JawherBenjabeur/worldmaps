import {​​​​​ HttpClient }​​​​​ from '@angular/common/http';
import {​​​​​ Injectable }​​​​​ from '@angular/core';
@Injectable({​​​​​
  providedIn: 'root'
}​​​​​)
export class HttpService {​​​​​
  constructor( private http: HttpClient) {​​​​​ }​​​​​
  getCountries (region){​​​​​
    let p=[]
    this.http.get<any[]>('https://restcountries.eu/rest/v2/region/'+region).subscribe(
      (pays)=>{​​​​​
        pays.forEach(
         pay => {​​​​​
           p.push(pay)
         }​​​​​
        )

      }​​​​​
    )
    return p;
  }​​​​​
  getDetails (name){
  let p=[]
  this.http.get<any[]>('https://restcountries.eu/rest/v2/name/'+name).subscribe(
    (pays)=>{​​​​​
      pays.forEach(
       pay => {​​​​​
         p.push(pay)
       }​​​​​
      )

    }​​​​​
  )
  return p;
​​
}​
getAllCountries (){​​​​​
  let p=[]
  this.http.get<any[]>('https://restcountries.eu/rest/v2/all').subscribe(
    (pays)=>{​​​​​
      pays.forEach(
       pay => {​​​​​
         p.push(pay)
       }​​​​​
      )

    }​​​​​
  )
  return p;
}​​​​​}
