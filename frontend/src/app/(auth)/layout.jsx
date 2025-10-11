import '@/styles/globals.css'

export const metadata = {
  title: {
    absolute: "ورود و ثبت نام"
  }
};

export default function RootLayout({ children }) {
  return (
    <div className=''>
      {children}
    </div>
  )
}
