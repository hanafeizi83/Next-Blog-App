import { IoCloudUploadOutline } from "react-icons/io5";

function FileInput({ name, onChange, value }) {
    return (
        <div>
            <label className='bg-secondary-500 hover:bg-secondary-600 transition-all duration-200 cursor-pointer text-secondary-0 flex items-center gap-4 justify-center p-2 rounded-lg'>
                انتخاب کاور پست
                <IoCloudUploadOutline className="w-7 h-7" />
                <input
                    type="file"
                    className='hidden'
                    name={name}
                    onChange={onChange}
                    value={value}
                />
            </label>
        </div>
    )
}

export default FileInput
