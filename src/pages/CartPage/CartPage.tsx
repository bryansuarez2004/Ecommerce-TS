import { PayProducts } from "./components/PayProducts"
import { ProductsInCart } from "./components/ProductsInCart"

export const CartPage = () => {
  return (
    <section className="pt-20">
        <h2 className="text-4xl font-bold py-0 p-5">

          Tu Carrito
        </h2>
        <div className="flex flex-col  sm:max-h-[300px] p-5 sm:flex-row gap-7">
            <ProductsInCart />
           <PayProducts />
        </div>
        
    </section>
  )
}
