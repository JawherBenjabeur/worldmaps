import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { CountryM } from 'src/app/models/country/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name;
  country;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(event => {​​​​​
      this.name=event.pay;
    });
    this.country=this.httpService.getDetails(this.name);
    console.log(this.country);


  }

}
