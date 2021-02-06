import { Component} from '@angular/core';
import { VirusService } from '../../service/virus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent{

  constructor(private virusService: VirusService) { }

  callVirusService(){
    this.virusService.getVirusData();
  }
}
