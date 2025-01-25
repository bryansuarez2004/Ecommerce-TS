import { create } from "zustand";
import {  user } from "../models";
import { createJSONStorage, persist } from "zustand/middleware";


type UserState =  {
   username: user['username'],
   email: user['email'],
   logOut: ()=>void,
   login: (value:user) => void
}


export const useUserStore = create<UserState>()(
    persist(
      (set) => ({
        username: "",
        email: "",
        login: (userObject) => set({ ...userObject }),
        logOut: () => set({ username: "", email: "" }),
      }),
      {
        name: "userSessionStorage", // Clave para identificar los datos
        storage: createJSONStorage(() => sessionStorage), // Usa sessionStorage
      }
    )
  );