import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private _http: HttpClient) { }

  public getCountries(): Observable<any> {
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'country-state-city-search-rest-api.p.rapidapi.com',
        'X-RapidAPI-Key': '0493d67b64mshb8662b303e27f81p1c118djsnc1a9378a8d86'
      })
    };
    return this._http.get("https://country-state-city-search-restapi.p.rapidapi.com/allcountries", httpOptions);
  }

  public getStateByCountryCode(countryCode: string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'country-state-city-search-rest-api.p.rapidapi.com',
        'X-RapidAPI-Key': '0493d67b64mshb8662b303e27f81p1c118djsnc1a9378a8d86'
      })
    };
    return this._http.get('https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode'+countryCode, httpOptions)
  }

}
