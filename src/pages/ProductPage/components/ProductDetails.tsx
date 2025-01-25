import { product } from "../../../models"
import { StockButton } from "./StockButton"
import { ValidateStock } from "./ValidateStock"

type Props = {
  product:product
}

export const ProductDetails = ({product}: Props) => {

  
  return (
    <div className="flex flex-col gap-3 p-5 grow">
    <div>

    <p className="text-sm text-secondary-bold">{product.category}</p>
    <h2 className="text-4xl font-bold">{product.name}</h2>
    </div>
    <div className="flex flex-col gap-1">

    <p className=" font-medium text-2xl">${product.price}.00</p>
    
    <ValidateStock stock={product.stock} />
    </div>

    <p className="text-secondary">{product.description}</p>
    {
      product.stock !== 0 && <StockButton stock={product.stock} product={product} />
    }
     
</div>
  )
}