import { createContext , useState } from "react";

const Context =createContext();

const ContextProvider = ({children}) =>{
    const[data, setData] = useState((window.localStorage.getItem('movieData')) || [])
    return(
        <Context.Provider value={{data , setData}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}