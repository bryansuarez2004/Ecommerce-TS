import { useState } from "react";
import { FaRegUser } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import { useUserStore } from "../../store/UserStore";
import { useNavigate } from "react-router";

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const login = useUserStore((state)=>state.login)
    const userLoged = useUserStore((state)=>state.username)
    const logOut = useUserStore((state)=>state.logOut)
    const [errors, setErrors] = useState({
      username: "",
      email: "",
    });
  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault() // Prevenir el envío del formulario
  
      let formErrors: {
        username: string;
        email: string;
      } = {
        username: "",
        email: ""
      };
  
      if (username.length > 20 || username.length <2 ) {
        formErrors.username = "El nombre de usuario debe tener mas de 1 caracter y menos de 20 caracteres";
      }
  
      if (!email.includes("@")) {
        formErrors.email = "El email debe contener '@'.";
      }
  
      if (formErrors.email || formErrors.username) {
        setErrors(formErrors);
      } else {
setErrors({username: "",
            email: "",}); 
     login({username,email})
              navigate('/')  
        
      }
    }; 


    const handleLogOut = () =>{
        logOut()
    }

    if(userLoged.length > 0) return <section className="pt-24 p-3 pb-14 flex justify-center">
    <form className="rounded-lg shadow-lg flex flex-col gap-5 shadow-light p-9 max-w-[500px]">
      <h2 className="text-2xl font-bold text-center">Esperamos volver a verte pronto {userLoged}</h2>

      <button onClick={handleLogOut} className="bg-red text-white p-3 rounded-lg hover:bg-red/90" type="submit">
        Salir
      </button>
    </form>
  </section>
  
    return (
      <section className="pt-24 p-3 pb-14 flex justify-center">
        <form onSubmit={(e)=>handleSubmit(e)} className="rounded-lg shadow-lg flex flex-col gap-5 shadow-light p-9 max-w-[500px]">
          <h2 className="text-3xl font-bold text-center">Registrate y empieza a comprar</h2>
          <p className="text-sm text-secondary">
            Esta aplicacion no cuenta con una base de datos para almacenar los usuarios, para ingresar solo se validara un username y un email correcto
          </p>
  
          <div className="relative">
            <input
              type="text"
              className="p-4 rounded-lg text-sm w-full bg-light grow"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaRegUser className="text-secondary absolute right-[10px] top-[20px]" />
            {errors.username && <p className="text-red text-xs">{errors.username}</p>}
          </div>
  
          <div className="relative">
            <input
              type="text"
              className="p-4 rounded-lg text-sm w-full bg-light grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdAlternateEmail className="text-secondary absolute right-[10px] top-[20px]" />
            {errors.email && <p className="text-red text-xs">{errors.email}</p>}
          </div>
  
          <button className="bg-primary text-white p-3 rounded-lg" type="submit">
            Ingresar
          </button>
        </form>
      </section>
    );
  };