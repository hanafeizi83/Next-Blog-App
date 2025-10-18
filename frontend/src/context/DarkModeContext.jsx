'use client';
import useLocalStorageTheme from "@/hook/useLocalStorageTheme";
import { createContext, useContext, useEffect, useState } from "react";

const DarkmodeContext = createContext();
export default function DarkModeProvider({ children }) {
    const [isDarkmode, setIsDarkmode] = useLocalStorageTheme('isDarkmode', false);
    useEffect(() => {
        if (isDarkmode) {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        }else{
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        }
    }, [isDarkmode])
    const toggleTheme = () => {
        setIsDarkmode(prev => !prev);
    }
    return (
        <DarkmodeContext.Provider value={{ isDarkmode, toggleTheme }}>
            {children}
        </DarkmodeContext.Provider>
    )
}

export function useDarkmode() {
    const darkmode = useContext(DarkmodeContext);
    return darkmode
}