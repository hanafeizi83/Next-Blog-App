import Image from "next/image"

function Avatar({ src, alt, width = 200, height = '160', className,...rest }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={className}
            {...rest}
        />
    )
}

export default Avatar
