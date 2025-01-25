import { Outlet } from "react-router"
import { Footer, Navbar } from "../components"

export const MainLayout = () => {
  return (
   <>
    <Navbar /> 
   <Outlet />
   <Footer />
   </>
  )
}