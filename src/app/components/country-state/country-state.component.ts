import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo.service';
import { Country } from '../../models/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-state',
  imports: [CommonModule],
  templateUrl: './country-state.component.html',
  styleUrl: './country-state.component.css'
})
export class CountryStateComponent implements OnInit {
  countries: Array<Country> = [];
  country!: Country;

  constructor(private geoService: GeoService) { 
    this.cargarCountries();
  }
  ngOnInit(): void {

  }

  cargarCountries() {
    this.geoService.getCountries().subscribe(
      (result) => {
        //Convertimos los paises recibidos en JSON a objetos JavScript
        console.log(result);
        for(let i=0; i<result.length; i++){
          this.countries.push(new Country(result[i].name, result[i].isoCode, result[i].flag, result[i].phonecode, 
            result[i].currency, result[i].latitude, result[i].longitude));
        }
        /*this.countries = new Array<Country>();
        result.forEach((element: any) => {
          this.country = new Country();
          Object.assign(this.country, element); //convertimos
          this.countries.push(this.country);
        });
        console.log(this.countries);*/
      },
      error => { alert("Error en la petición"); })
  }
}
