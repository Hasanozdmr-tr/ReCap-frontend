import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/CarImage/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44324/api/';

  constructor(private httpClient:HttpClient) { }

  getCarImage():Observable<ListResponseModel<CarImage>>
  {
   let newPath = this.apiUrl + "carImage/GetAll";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>
  {
    let newPath = this.apiUrl + "carImage/getimagesbycarid?=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
