import { createContext, useReducer } from "react";
import { authReducer, authInitialState } from "./authReducer";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,authInitialState)

    const login=(userData)=>{
        dispatch({
            type : "Login",
            payload : userData
        })
    };

    const logout=()=>{
        dispatch({
            type : "Logout"
        });
    }

    return (
        <AuthContext.Provider value={{state, login ,logout}}>
            {children}
        </AuthContext.Provider>
    )

}
