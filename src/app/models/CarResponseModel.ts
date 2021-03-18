import { Car } from "./car";
import { responseModel } from "./responseModel";

export interface CarResponseModel extends responseModel
{
    data:Car[],
}