import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from 'src/app/models/CarDto/CarDtoResponseModel';
import {HttpClient} from '@angular/common/http' 
import { CarDto } from 'src/app/models/CarDto/carDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  
  apiUrl='https://localhost:44324/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>
  {
   let newPath = this.apiUrl + "cars/GetAllCarDetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/GetCarsByBrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>>
  {
    let newPath = this.apiUrl + "cars/GetCarsByColor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
}
