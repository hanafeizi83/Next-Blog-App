import Image from "next/image"

function NotFound() {
    return (
        <div className="h-[calc(100vh-5rem)] overflow-hidden relative">
            <div className="relative h-full w-full">
                <Image
                    src='/images/not found.svg'
                    alt='login image'
                    fill
                />
            </div>
        </div>
    )
}

export default NotFound