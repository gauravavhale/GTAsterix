import { createContext, useReducer,  } from "react";
import { initialState, userReducer } from "./userReducer";

export const UserContext = createContext()

export const UserProvider=({children})=>{
    const [state, dispatch] = useReducer(userReducer, initialState)

    const setProfile=(profile)=>{
        dispatch({
            type : "Set_Profile",
            payload : profile
        })
    }

    const clearProfile=()=>{
        dispatch({
            type : "Clear_Profile",
        })
    }

    return (
        <UserContext.Provider value={{state,setProfile, clearProfile}}>
            {children}
        </UserContext.Provider>
    )
}