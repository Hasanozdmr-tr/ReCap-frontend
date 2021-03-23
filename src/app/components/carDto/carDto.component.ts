import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/CarDto/carDto';
import { CarImage } from 'src/app/models/CarImage/carImage';
import { CarDtoService } from 'src/app/services/CarDto/carDto.service';

@Component({
  selector: 'app-carDto',
  templateUrl: './carDto.component.html',
  styleUrls: ['./carDto.component.css']
})
export class CarDtoComponent implements OnInit 
{

  carDtos:CarDto[]=[];
  currentCar:CarDto;
  carImage:CarImage;
  nullCar:CarDto;
  dataLoaded = false;

  constructor(private carDtoService:CarDtoService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe
    (params=>
    {
     
      if (params["brandId"])
      {
        
      this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"])
      {
        this.getCarsByColor(params["colorId"]);
      }
      else
      {
        
        this.getCars();
      }
    })  
  }
getCars()
{
this.carDtoService.getCars().subscribe(response=>
  {
    
    this.carDtos=response.data
    this.dataLoaded=true
    
  });
  
}

getCarsByBrand(brandId:number)
{
  
this.carDtoService.getCarsByBrand(brandId).subscribe(response=>
  {
    this.carDtos=response.data
    this.dataLoaded=true
  }
  )
}

getCarsByColor(colorId:number)
{
  this.carDtoService.getCarsByColor(colorId).subscribe(response=>
    {
      this.carDtos=response.data
      this.dataLoaded=true
    }
    )
}

setCurrentCar(carDto:CarDto)
{
  this.currentCar = carDto;
}

getCurrentCarClass(carDto:CarDto){
  if(carDto == this.currentCar){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}

getAllCarsClass(){
  if(!this.currentCar){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}

resetCurrentCar(){
  this.currentCar=this.nullCar;
}

}
