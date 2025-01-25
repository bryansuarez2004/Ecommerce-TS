import { CalvinKleinSvg, GucciSvg, PradaSvg, VersaceSvg, ZaraSvg } from "../../../UX"

export const BrandsSection = () => {
  return (
   <section className="bg-primary p-5 flex flex-wrap gap-3 sm:gap-6 justify-center">
         <ZaraSvg />
         <CalvinKleinSvg /> 
         <GucciSvg />
         <PradaSvg />
         <VersaceSvg />
        </section>
  )
}