import { useEffect, useRef } from "react";

export default function useOutsideClick(handler) {
    const ref = useRef();
    useEffect(() => {
        function outsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler()
            }
        }
        document.addEventListener('click', outsideClick);

        return () => {
            document.removeEventListener('click', outsideClick)
        }
    }, [handler, ref])

    return ref
}