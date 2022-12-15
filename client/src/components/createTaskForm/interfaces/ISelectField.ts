import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

interface SelectItems {
  label:string;
  value:string;
}

export  interface ISelectField extends IDisabled{
  name?:string;
  label?:string;
  value?:string;
  onChange?(e:SelectChangeEvent):void;
  items?:SelectItems[];
}
