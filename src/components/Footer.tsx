import { AiFillTikTok } from "react-icons/ai"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { linkPortafolio } from "../models"

export const Footer = () => {
  return (
    <footer className="bg-light p-5 flex flex-col gap-6 sm:p-10 sm:flex-row sm:gap-9">
          
          <div className=" basis-1/3 flex flex-col gap-7
        ">
            <img className="w-[120px] object-cover h-[60px]" src="/mainLogo.jpg
            " alt="" />
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem magni laboriosam aut dolorum modi est ducimus magnam.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/" target="_blank">
    
          <FaFacebook className="text-secondary-bold text-2xl hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/" target="_blank">
    
          <FaInstagram className="text-secondary-bold text-2xl hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/" target="_blank">
    
          <FaLinkedin className="text-secondary-bold text-2xl hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/" target="_blank">
    
          <FaTwitter className="text-secondary-bold text-2xl hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-alejandro-suarez-fernandez-980135266/" target="_blank">
    
          <AiFillTikTok className="text-secondary-bold text-2xl hover:opacity-80" />
            </a>
          </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 basis-2/3 justify-around">
            <div className="  flex flex-col gap-3  ">
              <h3 className="text-secondary-bold">Servicios</h3>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75"  target="_blank">coaching</a>
              <a href={linkPortafolio}className="text-secondary text-sm hover:opacity-75" target="_blank">compania</a>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">cuentas</a>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">consultas</a>
            </div>
            <div className="  flex flex-col gap-3 ">
            <h3 className="text-secondary-bold">Compani</h3>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75"  target="_blank">sobre</a>
              <a href={linkPortafolio}className="text-secondary text-sm hover:opacity-75" target="_blank">conoce el equipo</a>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">review de cuentas</a>
            </div>
            <div className="  flex flex-col gap-3  ">
              <h3 className="text-secondary-bold">Links de ayuda</h3>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">contacto</a>
              <a href={linkPortafolio}className="text-secondary text-sm hover:opacity-75" target="_blank">chta en vivo</a>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">FAQs</a>
            </div>
            <div className="  flex flex-col gap-3  ">
            <h3 className="text-secondary-bold">Legal</h3>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75"  target="_blank">accesibilidad</a>
              <a href={linkPortafolio}className="text-secondary text-sm hover:opacity-75" target="_blank">politica</a>
              <a href={linkPortafolio} className="text-secondary text-sm hover:opacity-75" target="_blank">estadisticas</a>
            </div>
    
          </div>
        </footer>
  )
}