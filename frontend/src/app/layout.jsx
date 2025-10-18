import '@/styles/globals.css'
import KalamehFont from "@/constans/localFont";
import AuthProvider from 'context/AuthContext';
import { Toaster } from 'react-hot-toast';
import ReactQueryProviders from 'providers/ReactQueryProviders';

export const metadata = {
    title: {
        template: '%s | بلاگینو',
        default: 'بلاگینو',
    },
    description: 'مرجع بلاگ های رسمی ',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir='rtl'>
            <body
                className={`${KalamehFont.variable} sans`}
            >
                <ReactQueryProviders>
                    <AuthProvider>
                        <Toaster />
                        {children}
                    </AuthProvider>
                </ReactQueryProviders>
            </body>
        </html>
    );
}