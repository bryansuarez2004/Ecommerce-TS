import { IoMdAlert } from "react-icons/io"
import { product } from "../../../models"

type Props = {
    stock:product['stock']
}


export const ValidateStock = ({ stock}: Props) => {

   if (stock === 0) return   <p className="text-sm text-red self-start border-2 flex flex-wrap rounded-full px-1 border-red"> No hay elementos en Stock</p>
   if (stock === 1) return   <p className="text-sm text-red self-start  flex gap-1 "> Último elemento en stock <IoMdAlert className="text-lg" /></p>

  return (
    <div>


    <p className="text-sm text-red"> Stock: {stock}</p>
    </div>
  )
}