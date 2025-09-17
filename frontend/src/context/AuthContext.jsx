"use client";
import { getUserApi, signinApi, signupApi } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const authContext = createContext();
const intialState = {
    isLoading: false,
    error: null,
    user: {}
}

function authReducer(state, { type, payload }) {
    switch (type) {
        case 'isLoading': {
            return {
                isLoading: true
            }
        }
        case 'rejected': {
            return {
                isLoading: false,
                error: payload
            }
        }
        case 'signin': {
            return {
                isLoading: false,
                error: null,
                user: payload
            }
        }
        case 'signup': {
            return {
                isLoading: false,
                error: null,
                user: payload
            }
        }
        case 'loaded/user': {
            return {
                isLoading: false,
                error: null,
                user: payload
            }
        }
    }

}


export default function AuthProvider({ children }) {
    const [{ isLoading, user, error }, dispatch] = useReducer(authReducer, intialState);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'isLoading' });
            try {
                const { user } = await getUserApi();
                dispatch({ type: 'loaded/user', payload: user });

            } catch (error) {
                const errorMsg = error?.response?.data?.message;
                toast.error(errorMsg);
                dispatch({ type: 'rejected', payload: errorMsg });

            }
        }
        fetchData()
    }, []);

    async function signup(values) {
        dispatch({ type: 'isLoading' });
        try {
            const { message, user } = await signupApi(values);
            toast.success(message);
            dispatch({ type: 'signup', payload: user });

        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            toast.error(errorMsg);
            dispatch({ type: 'rejected', payload: errorMsg });

        }
    }

    async function signin(values) {
        dispatch({ type: 'isLoading' });
        try {
            const { message, user } = await signinApi(values);
            toast.success(message);
            dispatch({ type: 'signup', payload: user });
            router.push('/');

        } catch (error) {
            const errorMsg = error?.response?.data?.message;
            toast.error(errorMsg);
            dispatch({ type: 'rejected', payload: errorMsg });

        }
    }

    return <authContext.Provider value={{ user, error, isLoading, signup, signin }}>
        {children}
    </authContext.Provider>
}


export function useAuth() {
    const context = useContext(authContext);
    if (context === undefined) throw new Error('not found Auth Context');
    return context
}