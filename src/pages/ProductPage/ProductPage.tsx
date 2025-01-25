import { useParams } from "react-router";
import { ImgCarousel } from "./components/ImgCarousel";
import { ProductDetails } from "./components/ProductDetails";
import { CarouselSameProducts } from "./components/CarouselSameProducts";
import { Comments } from "./components/Comments";
import { useProductsStore } from "../../store/ProductsStore";
type params = {
  productId: string;
};

export const ProductPage = () => {
         const  products  =  useProductsStore((state)=>state.products)
  
  const { productId } = useParams<params>();

  const product = products.filter(
    (product) => product.id === Number(productId)
  )[0];
  return (
    <section>
      <section className="pt-20  sm:flex">
        <ImgCarousel slides={product.images} />
        <ProductDetails product={product} />
      </section>
      <CarouselSameProducts category={product.category} />
      <Comments idProduct={product.id} />
    </section>
  );
};
