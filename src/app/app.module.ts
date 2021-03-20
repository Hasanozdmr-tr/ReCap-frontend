import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CarDtoComponent } from './components/carDto/carDto.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDtoComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    BrandComponent,
    RentalComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //dışarıdan aldığımız packetleri buraya
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
