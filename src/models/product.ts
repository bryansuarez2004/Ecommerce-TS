import { category } from "./category";


export type product = {
    id: number ;
    name: string;
    images: string[];
    description: string;
    category: category;
    price:number;
    stock: number
  
  };
