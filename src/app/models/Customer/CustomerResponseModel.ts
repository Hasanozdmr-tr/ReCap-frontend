import { Customer } from "./customer";
import { responseModel } from "../responseModel";

export interface CustomerResponseModel extends responseModel
{
    data:Customer[]
}