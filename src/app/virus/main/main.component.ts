import { Component, Input, OnInit } from '@angular/core';
import { VirusService } from '../../service/virus.service';
import { SearchVirusResponse } from '../../Interfaces/virus.interface';
import { CountryInterface } from '../../Interfaces/country.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent{
  @Input() country: CountryInterface = {
    name: ''
  }
  public virusArray!: SearchVirusResponse[];
  public oneCountry!: SearchVirusResponse;
  public deleteOneCountry!: SearchVirusResponse;
  public UrlFlag = 'https://www.countryflags.io/';
  public urlFlag2 = '/flat/32.png';

  constructor(private virusService: VirusService) {
    this.consumeServiceOfVirus();
  }

  get resultVirusData(){
    return this.virusArray = this.virusService.serviceResponse;
  }

  get allCasesOfWorld(){
    return this.virusService.allCasesOfWorld;
  }
  
  consumeServiceOfVirus(){
    this.virusService.getVirusData();
  }

  search(){

    if (this.country.name.trim() === '') {
      return;
    }

    this.allCasesOfWorld.forEach((country, i) =>{
        if(this.country.name.toLowerCase() === country.Country.toLowerCase()){
          this.oneCountry = country;
        }
    });

    this.country = {
      name: ''
    }
  }

  clearOneCountry(){
    this.oneCountry = this.deleteOneCountry;
  }
}
