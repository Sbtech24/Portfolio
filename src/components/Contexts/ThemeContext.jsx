"use client"

import { useState,createContext, useEffect} from 'react'


export const ThemeContext = createContext(undefined)


export const ThemeProvider = ({children})=>{
   
    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[theme])

    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme ==="light" ? "dark":"light")
        console.log("toggle theme")
    }
    console.log('ThemeProvider is rendering with theme:', theme);
    return(
        <ThemeContext.Provider value={{toggleTheme,theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeContext