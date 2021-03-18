import { responseModel } from "../responseModel";
import { Rental } from "./rental";

export interface RentalResponseModel extends responseModel
{
    data:Rental[]
}