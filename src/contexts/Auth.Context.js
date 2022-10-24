import { createContext } from "react";

export const AuthContext = createContext({
    login: false, 
    logout: false,
    isAuth: false
})
