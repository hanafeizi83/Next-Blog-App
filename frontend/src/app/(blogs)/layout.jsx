import '@/styles/globals.css'
import Header from '@/components/Header'
import React from 'react'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className='container lg:max-w-lg !mt-18'>
        {children}
      </div>
    </>

  );
}
