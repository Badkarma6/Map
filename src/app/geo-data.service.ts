import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoDataService {

  constructor(private http: HttpClient) { }

  getCountryInformation(countryCode: string): Observable<any> {
    const url = `http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=${countryCode}&username=D280AngelH&style=full`;
    return this.http.get(url);
  }
}
