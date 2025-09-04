import Header from "@/components/Header";
import KalamehFont from "@/constans/localFont";
import "@/styles/globals.css";
import AuthProvider from "context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: '%s | بلاگ آپ',
    default: 'بلاگ آپ'
  },
  description: "سلیت مدیریت و مصالعه بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${KalamehFont.variable} sans`}>
        <AuthProvider>
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
