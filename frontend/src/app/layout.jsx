import '@/styles/globals.css'
import KalamehFont from "@/constans/localFont";
import AuthProvider from 'context/AuthContext';
import { Toaster } from 'react-hot-toast';

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
                <AuthProvider>
                    <Toaster />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}