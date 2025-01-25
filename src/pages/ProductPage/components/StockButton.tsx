import  { useEffect, useState } from "react"
import { CgMathPlus } from "react-icons/cg"
import { RxMinus } from "react-icons/rx"
import { productInCart } from "../../../models/productInCart"
import { product } from "../../../models"
import { useCartProductsStore } from "../../../store/CartProductsStore"
import { useParams } from "react-router"

type Props = {
    stock:number,
    product:product
}
type params = {
    productId: string;
  };

export const StockButton = ({stock,product}: Props) => {
     const {productId} = useParams<params>()
    const [stockBuy, setStockBuy] = useState(1)
    const getProductInCart =  useCartProductsStore((state)=>state.getProductInCart)
    const addNewProductInCart = useCartProductsStore((state)=>state.addNewProductInCart)
    const productsInCart = useCartProductsStore((state)=>state.productsInCart)
    const productInCart = getProductInCart(product.id)  
    useEffect(()=>{
        if(productInCart){

            setStockBuy(0 + productInCart.quantity)
        }  else {
            setStockBuy(1)
        }
         
        console.log('calculando el stockbuy');
        
    },[productId,productsInCart])

    const minusStock = () =>{
        if(stockBuy > 1 )
        setStockBuy(stockBuy - 1)
    }

    const plusStock = () =>{
        if(stockBuy < stock )
        setStockBuy(stockBuy + 1)
    }


    const addProductToCart = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
           const productToCart:productInCart = {
              ...product,quantity:stockBuy
           }
           addNewProductInCart(productToCart)
           console.log('agregando producto a carrito');
           
         
    }
  return (


    <form onSubmit={(e)=>addProductToCart(e)} className="flex gap-4 p-3  grow items-center justify-end">


 <div className="relative">

<div className="flex p-3 gap-5 max-w-max rounded-full bg-light">
       <RxMinus onClick={minusStock}  className="text-2xl hover:text-red cursor-pointer"/>
       <p>{stockBuy}</p>
       <CgMathPlus onClick={plusStock}  className="text-2xl hover:text-red cursor-pointer" />
       </div>
       {
           productInCart && <p className="text-xs absolute bottom-[-35px] text-secondary">hay {productInCart.quantity} elementos en el carrito</p>      
           
        }
        </div>
       <button className="p-4 rounded-full bg-black text-white grow">Agregar al carrito</button>
     </form>
   
  )
}