import { product } from "./product";

 export type comment = {
    id: number;
    fkProduct: product['id'];
    byName: string;
    byEmail: string;
   text: string;
   date:string 
}

