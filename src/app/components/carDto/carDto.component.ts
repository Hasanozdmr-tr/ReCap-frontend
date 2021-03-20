import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/CarDto/carDto';
import { CarDtoService } from 'src/app/services/CarDto/carDto.service';

@Component({
  selector: 'app-carDto',
  templateUrl: './carDto.component.html',
  styleUrls: ['./carDto.component.css']
})
export class CarDtoComponent implements OnInit 
{

  carDtos:CarDto[]=[];
  dataLoaded = false;

  constructor(private carDtoService:CarDtoService) { }

  ngOnInit(): void 
  {
    this.getCars();
  }
getCars()
{
this.carDtoService.getCars().subscribe(response=>
  {
    
    this.carDtos=response.data
    this.dataLoaded=true
    
  });
  
}
}
