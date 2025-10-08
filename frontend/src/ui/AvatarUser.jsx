import Image from 'next/image'

function AvatarUser({ src, alt, className }) {
    return (
        <div className={`${className} relative`}>
            <Image
                src={src || '/images/girl1.png'}
                fill
                style={{ objectFit: "cover" }}
                alt={alt}
                className="rounded-full"
            />
        </div>
    )
}

export default AvatarUser
