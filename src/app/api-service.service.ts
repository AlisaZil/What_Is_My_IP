import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServieService {

  constructor(private httpClient: HttpClient) { }

  readonly APIurl = 'https://geo.ipify.org/api/v2/country?apiKey=at_asKIjxx9xN2PGwv0JE5vdOc8hhQK8';

  getUserIp(): Observable<any>{
    return this.httpClient.get<any>(this.APIurl);
  }

  getUserDetailssByIP(ipAddress:string): Observable<any>{
    return this.httpClient.get<any>(this.APIurl + ipAddress);
  }
}
