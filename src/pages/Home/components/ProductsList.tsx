
import { Link } from "react-router";
import { useProductsStore } from "../../../store/ProductsStore";

export const ProductsList = () => {
       const  products  =  useProductsStore((state)=>state.products)

  return (
     <section>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] p-16 gap-10">
              {products.map((product) => {
                return (
                  <Link to={`/product/${product.id}`} viewTransition  key={product.id} className="rounded-3xl  flex flex-col  shadow-lg overflow-hidden shadow-light">
                    <img
                      className=" aspect-square w-full"
                      src={product.images[0]}
                      alt=""
                    />
                    <div className="p-5  grow  flex flex-col ">
                      
    
                    <h1 className="text-2xl grow font-medium">{product.name}</h1>
                    {
                      product.stock === 0 
                      ? <div className=" text-red border-2 border-red px-1 self-start rounded-full font-semibold">Agotado</div>
                      :  <p className="text-secondary-bold">Stock: {product.stock}</p>
                    }
                   
                    <p className="text-2xl font-semibold"> ${product.price}.00</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
  )
}