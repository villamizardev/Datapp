import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearhComponent } from './searh/searh.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    SearhComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearhComponent
  ]
})
export class VirusModule { }
