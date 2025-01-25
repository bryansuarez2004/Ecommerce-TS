import { PiShoppingCartDuotone } from "react-icons/pi";
import { product } from "../../../models";
import { useCartProductsStore } from "../../../store/CartProductsStore";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { productInCart } from "../../../models/productInCart";

export const ProductsInCart = () => {
  const productsInCart = useCartProductsStore((state) => state.productsInCart);
  const deleteProductInCart = useCartProductsStore((state) => state.deleteProductInCart);
  const navigate = useNavigate()

  const handleDeleteProductInCart = (idProductInCart:product['id']) =>{
       
    deleteProductInCart(idProductInCart)
  }

  const redirectToCartPage = (id:productInCart['id']) => navigate(`/product/${id}`)

  
   
  if (!productsInCart.length) return <p className="basis-1/2  flex flex-col justify-center items-center text-secondary"><PiShoppingCartDuotone className="text-9xl text-light" /> No hay productos en tu carrito</p> 
  return (
    <section className="basis-1/2 overflow-auto customScroll">
       

      {productsInCart.map((productInCart) => {
        return (
          <div key={productInCart.id} className="flex gap-2 p-2">
            <img
            onClick={()=>redirectToCartPage(productInCart.id)}
              className="aspect-square w-[70px] rounded-lg cursor-pointer"
              src={productInCart.images[0]}
              alt=""
            />
            <div className="grow  flex justify-between p-1 flex-col text-secondary-bold">
              <div className="">
                <p onClick={()=>redirectToCartPage(productInCart.id)} className="cursor-pointer leading-tight">{productInCart.name}</p>
                <p className="text-xs text-red leading-tight">${productInCart.price}.00</p>
              </div>
              <span className="text-xs  text-secondary line-clamp-1">
                {productInCart.description}
              </span>
            </div>
            <div className="flex gap-2  text-sm text-secondary items-center">
              {productInCart.quantity}
              <FaRegTrashCan onClick={()=>handleDeleteProductInCart(productInCart.id)} className="cursor-pointer hover:text-red" />
            </div>
          </div>
        );
      })}
    </section>
  );
};
