import useEmblaCarousel from "embla-carousel-react"
import { product } from "../../../models"
import { productsDB } from "../../../bd"
import { Link } from "react-router"

type Props = {
  category: product['category']
}

export const CarouselSameProducts = ({category}:Props) => {
  const [emblaRef] = useEmblaCarousel()

  const products = productsDB.filter((productDB)=> productDB.category === category)
     
  return (
    <section className="p-5">
       <p className="text-2xl font-semibold">Productos similares</p>
       <div className="embla__sameProducts" ref={emblaRef}>
      <div className="embla__container__sameProducts gap-7">
        {
          products.map((product)=>{
            return <Link to={`/product/${product.id}`} key={product.id} className="embla__slide__sameProducts rounded-xl cursor-pointer grid gap-2 overflow-hidden sm:basis-[23%] lg:basis-[15%]">
              <img className="aspect-square " src={product.images[0]} alt="" />
               <p className="text-sm ">{product.name}</p>
            </Link>
          })
        }
        
        
      </div>
    </div>
     </section>
  )
}