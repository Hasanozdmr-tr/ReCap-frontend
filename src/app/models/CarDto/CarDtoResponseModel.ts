import { CarDto } from "./carDto";
import { responseModel } from "../responseModel";

export interface CarDtoResponseModel extends responseModel
{
    data:CarDto[],
}