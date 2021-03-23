import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDtoComponent } from './components/carDto/carDto.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = 
[
  { path: '', pathMatch:"full", component: CarDtoComponent },
  { path: 'rentals', component: RentalComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'cars', component: CarDtoComponent },
  {path:"cars/brand/:brandId",component:CarDtoComponent},
  {path:"cars/color/:colorId",component:CarDtoComponent},
  { path: 'brands', component: BrandComponent },
  { path: 'colors', component: ColorComponent },
  { path: 'carImage/carDto/:carId', component: CarImageComponent },
  { path: 'carImage', component: CarImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
