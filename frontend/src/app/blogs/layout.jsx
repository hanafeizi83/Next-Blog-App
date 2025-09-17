import Header from '@/components/Header'
import React from 'react'

function layout({ children }) {
    return (
        <>
            <Header />
            <div className="container xl:max-w-screen-xl !mt-18">
                {children}
            </div>
        </>
    )
}

export default layout
