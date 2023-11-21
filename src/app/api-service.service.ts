import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServieService {

  constructor(private httpClient: HttpClient) { }

  readonly APIurl = 'https://api.geoapify.com/v1/ipinfo?apiKey=cb8424a9dbdd4768be2794a53ce21b49';

  getUserIp(): Observable<any>{
    return this.httpClient.get<any>(this.APIurl);
  }

  
  getUserDetailssByIP(ipAddress:string): Observable<any>{
    return this.httpClient.get<any>(this.APIurl + `&ipAddress=${ipAddress}`);
  }
}
