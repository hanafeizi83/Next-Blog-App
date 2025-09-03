function Search({className}) {
    return (
        <form className={`rounded-lg w-[30%] flex p-1 ${className}`}>
            <input type="text" placeholder="جستجو ..." className="rounded-r-lg w-full p-1.5 border outline-0 border-primary-900"/>
            <button className="bg-primary-900 cursor-pointer rounded-l-lg w-10 h-10 p-1 flex items-center justify-center text-secondary-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </ form>
    )
}

export default Search
