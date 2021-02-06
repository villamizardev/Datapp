import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SearchVirusResponse } from '../Interfaces/virus.interface';

@Injectable({
  providedIn: 'root'
})
export class VirusService {

  private Url: string = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/';
  private apiKey: string = '6627581db9mshf314a1407941cfcp1e3fcajsndd5ce7115e23';
  private host: string = 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com';
  private booleanParam: string = 'true';
  public serviceResponse!: SearchVirusResponse[];
  public allCasesOfWorld: SearchVirusResponse[] = [];
  

  constructor(private _http: HttpClient) {
    this.allCasesOfWorld = JSON.parse(localStorage.getItem('allCasesOfWorld')!) || '';
  }

  getVirusData(){
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiKey)
      .set('x-rapidapi-host', this.host)
      .set('useQueryString', this.booleanParam);

    this._http.get<SearchVirusResponse[]>(`${this.Url}`, {headers})
      .subscribe((response) => {
        this.serviceResponse = response;
        localStorage.setItem('allCasesOfWorld', JSON.stringify(response));
      });
  }
}
