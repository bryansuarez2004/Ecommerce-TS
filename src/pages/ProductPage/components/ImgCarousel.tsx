import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Autoplay from 'embla-carousel-autoplay'

type Props = {
    slides: string[]
}

export const ImgCarousel = ({slides}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef,emblaMainApi] = useEmblaCarousel({}, [Autoplay({delay:3000})])
    const [emblaThumbsRef,emblaThumbsApi] = useEmblaCarousel()

    const onThumbClick = useCallback(
        (index: number) => {
          if (!emblaMainApi || !emblaThumbsApi) return
          emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
      )
    
      const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
      }, [emblaMainApi, emblaThumbsApi])  

      useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
    
        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
      }, [emblaMainApi, onSelect])
     
    const stopAutoplay =() =>{
        if (emblaMainApi) emblaMainApi.plugins().autoplay.stop()
            
    }
    
    const playAutoplay =() =>{
        if (emblaMainApi) emblaMainApi.plugins().autoplay.play()
    }

    return (
        <>
        <div onMouseEnter={stopAutoplay}  onMouseLeave={playAutoplay} className="max-w-[600px] p-10 grid gap-5">

      <div className="embla " ref={emblaMainRef}>
      <div className="embla__container">
        {
            slides.map((imgUrl,index)=>{
                return  <div key={index}  className="embla__slide"> <img className="w-full aspect-square object-cover" src={imgUrl} alt="" /></div>
            })
        }
       
      </div>
    </div>
    <div className="embla__thumbs " ref={emblaThumbsRef}>
      <div className="embla__container__thumbs justify-center gap-6">
        {
            slides.map((imgUrl,index)=>{
                return  <div key={index}  onClick={()=>onThumbClick(index)} className="embla__slide__thumbs">
                     <div className={`${selectedIndex === index ? 'border-secondary-bold' : 'border-white'} p-1  border-2  rounded-lg cursor-pointer`}>
                   <img className="aspect-square object-cover " src={imgUrl} alt="" />
                   </div>
                   </div>
            })
        }
       
      </div>
    </div>
        </div>
        </>
    )
}
