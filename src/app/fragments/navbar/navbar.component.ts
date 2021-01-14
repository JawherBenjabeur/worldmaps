import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
pay='';
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  recherche(){
    this.router.navigate(["countries/region", this.pay])
  }

}
