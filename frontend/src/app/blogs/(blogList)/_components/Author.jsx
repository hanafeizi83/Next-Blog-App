import AvatarUser from "@/ui/AvatarUser"

function Author({ author: { avatarUrl, name }, classNameTitle ,classNameImage}) {
    return (
        <div className='flex items-center gap-1'>
            <AvatarUser
                src={avatarUrl}
                alt='author'
                className={`h-8 w-8 self-center justify-self-center ${classNameImage}`}
            />
            <span className={`text-xs ${classNameTitle}`}>{name}</span>
        </div>
    )
}

export default Author
