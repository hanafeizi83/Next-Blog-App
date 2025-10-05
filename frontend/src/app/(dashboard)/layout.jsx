import Header from './profile/_/components/Header'
import Sidebar from './profile/_/components/Sidebar'

function layout({ children }) {
    return (
        <div className='grid grid-cols-[14rem_1fr] grid-rows-[4rem_1fr]'>
            <Sidebar />
            <Header />
            <div className="px-4">
                {children}
            </div>
        </div>
    )
}

export default layout
