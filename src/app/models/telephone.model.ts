import { Type } from "./type.model";
import { Image } from "./Image.model";
export class Phone
{
  idTelephone!:number;
  nomTelephone!:string;
  societe!:string;
  prixTelephone!:number;
  dateCreation!:Date;
  type!:Type;
  image! : Image;
  imageStr!:string;

  images!: Image[];
}