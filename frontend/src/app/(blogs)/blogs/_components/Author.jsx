import AvatarUser from "@/ui/AvatarUser"

function Author({ author: { avatarUrl, name } }) {
    return (
        <div className='flex items-center gap-1'>
            <AvatarUser
                src={avatarUrl}
                alt='author'
                className='h-8 w-8 self-center justify-self-center'
            />
            <span className='text-xs'>{name}</span>
        </div>
    )
}

export default Author
