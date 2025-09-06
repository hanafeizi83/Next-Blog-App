import '@/styles/globals.css'

export const metadata = {
  title: "Auth",
  description: "Auth",
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
