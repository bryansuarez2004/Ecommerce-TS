export const Header = () => {
  return (
    <header className=" flex flex-col sm:flex-row pt-[70px]">
       <div className="flex flex-1 p-5 sm:py-14 sm:p-10 sm:gap-7 flex-col items-center gap-3">
            <h1 className="text-primary sm:grow  grid items-center sm:text-6xl sm:font-medium text-4xl uppercase font-extrabold">Encuentra la que marque tu estilo</h1>
            <p className="text-secondary   text-sm">Explore nuestra variada gama de prendas meticulosamente elaboradas, diseñadas para resaltar su individualidad y satisfacer su sentido del estilo.</p>
            <button className="p-3 sm:mb-4 w-full max-w-[300px] rounded-full bg-primary text-white">
              Compra ahora
            </button>
            <div className="flex  divide-x-2 *:p-2 *:border-primary divide-solid ">
              <div>
              <span className=" font-bold text-2xl">200+</span>
              <p className="text-secondary text-xs  ">marcas internacionales</p>
              </div>
              <div className="">
              <span className=" font-bold text-2xl">2,000+</span>
              <p className="text-secondary text-xs  ">productos de alta calidad </p>
              </div>
              <div>
              <span className=" font-bold text-2xl">30,000+</span>
              <p className="text-secondary text-xs  ">clientes satisfechos</p>
              </div>
            </div>
       </div>
       <div className="  h-[300px] sm:flex-1 sm:h-auto sm:max-h-[600px]">
        <img className=" object-cover w-full h-full" src="/headerImg.avif" alt="" />
       
       </div>
     </header>
  )
}