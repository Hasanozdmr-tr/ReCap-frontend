import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/Color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl  = "https://localhost:44324/api/colors/getall";

  constructor(private httpClient:HttpClient) { }

    getColors():Observable<ListResponseModel<Color>>
    {
      console.log("renk servisi")
return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
    }
}
