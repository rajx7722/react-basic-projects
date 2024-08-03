import { createContext,useContext } from "react";
export const ThemeContext = createContext({
    ThemeMode : "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{},
 })

 export const ThemeProvider = ThemeContext.Provider

 export default function useTheme(){
    return useContext(ThemeContext)
 }
//unlike as the previous project as both createContext and .provider used in the same file
