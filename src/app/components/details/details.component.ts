import { Component, OnInit } from '@angular/core';
import { CountryM } from 'src/app/models/country/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
