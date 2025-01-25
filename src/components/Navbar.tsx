import { FaRegUserCircle } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { Link, useNavigate } from "react-router"
import { useUserStore } from "../store/UserStore"

export const Navbar = () => {
    const navigate =useNavigate()
    const email = useUserStore((state)=>state.email)
    const username = useUserStore((state)=>state.username)
    

  return (
     <nav className="p-2 bg-white z-50 fixed w-screen flex justify-between items-center px-10">
          <Link to={'/'} viewTransition className="w-[120px] h-[60px] ">
    
          <img className="block h-full w-full object-cover " src="/mainLogo.jpg" alt="" />
          </Link>
    
          <div className=" flex gap-5">
            <div onClick={()=>navigate('/login')} className="relative cursor-pointer flex text-sm gap-1 items-center">
              {
                 username.length !== 0 && <p className="text-primary">{username}</p>
              }
          <FaRegUserCircle  className="text-2xl " />
             {
              email.length === 0 && <div className="absolute bottom-[-8px] right-0">
                
                <span className="relative  flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red  opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-red"></span>
            </span>
                </div>
             }
            </div>
          <FiShoppingCart onClick={()=>navigate('/cart')} className="text-2xl cursor-pointer" />
    
          </div>
        </nav>
  )
}