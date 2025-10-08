import Header from './profile/_/components/Header'
import Sidebar from './profile/_/components/Sidebar'
// import '@/styles/styles.css'
function layout({ children }) {
    return (
        <div className='grid lg:grid-cols-[14rem_1fr] lg:max-w-screen-xl  grid-cols-[6rem_1fr] grid-rows-[4rem_1fr]'>
            <Sidebar />
            <Header />
            <div className="px-4">
                {children}
            </div>
        </div>
    )
}

export default layout
