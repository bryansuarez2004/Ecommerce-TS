import { FaArrowRight } from "react-icons/fa"
import { useCartProductsStore } from "../../../store/CartProductsStore"
import { useEffect, useState } from "react";
import { useProductsStore } from "../../../store/ProductsStore";
import { useUserStore } from "../../../store/UserStore";
import { toast } from "sonner";

export const PayProducts = () => {
      const productsInCart =   useCartProductsStore((state)=>state.productsInCart)
      const resetCart =   useCartProductsStore((state)=>state.resetCart)
      const email = useUserStore((state)=>state.email)
        const updateProductStock =    useProductsStore((state)=>state.updateProductStock)
      const [totals, setTotals] = useState({
        subTotal: 0,
        deliver: 0,
        total: 0,
      });
    
      useEffect(() => {
        const subTotal = productsInCart.reduce(
          (subtotal, productInCart) => subtotal + productInCart.price * productInCart.quantity,
          0
        );
        const deliver = Math.floor(0.03 * subTotal);
        const total = subTotal + deliver;
    
        setTotals({ subTotal, deliver, total });
      }, [productsInCart]);


     const payProducts = ()=>{
          if(email.length === 0 ) return toast.warning('Debes hacer login para comprar')

        productsInCart.forEach((productInCart)=>{
            updateProductStock(productInCart.id,productInCart.quantity)
        })
        resetCart()

        console.log('pagando');
        
     }



  return (
    <section className="p-7 md:p-2 grid basis-1/2 gap-4">
                    <h2 className="text-2xl font-bold">
    
                     Resumen de la compra
                    </h2>
                    <div>
                    <div className="flex justify-between">
                      <span className="text-secondary-bold text-sm ">Sub Total</span>
                      <span className="font-bold">${totals.subTotal}.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-bold text-sm ">Delivery +3%</span>
                      <span className="font-bold">${totals.deliver}.00</span>
                    </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-bold text-sm ">Total</span>
                      <span className="font-bold">${totals.total}.00</span>
                    </div>
                    <button disabled={productsInCart.length ?false:true} onClick={payProducts} className="bg-primary disabled:bg-black/50 hover:bg-primary/90 flex gap-2 justify-center items-center text-white py-2 rounded-full">
                        Pagar
                        <FaArrowRight  />
                    </button>
                </section>
  )
}