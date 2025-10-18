import { useEffect, useState } from "react";

export default function useLocalStorageTheme(key, initialValue) {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        }
        return initialValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}