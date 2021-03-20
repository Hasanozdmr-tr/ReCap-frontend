import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/RentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl='https://localhost:44324/api/rentals/GetRentalDetails';

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>
  {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }
}
