import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/CarDto/carDto';
import { CarImage } from 'src/app/models/CarImage/carImage';
import { CarImageService } from 'src/app/services/CarImage/carImage.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  carDtos:CarDto[]=[];
  path= 'https://localhost:44324';
  currentImage : CarImage | null;

  constructor(private carImageService:CarImageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe((params)=>
{
  if(params['carId'])
  {
    this.getCarImageByCarId(params['carId']);
  }
  else
  {
    this.getCarImage();
  }
}
) }

  getCarImage() {
    this.carImageService.getCarImage().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarImageByCarId(carId:number)
  {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCurrentImageClass(carImage : CarImage){

    if(this.currentImage == carImage ){
      return "carousel-item active"
    }
    else{
      return "carousel-item "
    }    
  }
}
