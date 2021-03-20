import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from 'src/app/models/CarDto/CarDtoResponseModel';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl='https://localhost:44324/api/cars/GetAllCarDetails';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarDtoResponseModel>
  {
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl)
  }
}
