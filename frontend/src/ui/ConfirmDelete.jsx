// import { useFormStatus } from 'react-dom'
import Button from './Button'
import Loading from './Loading';

function ConfirmDelete({ title, onClose, onConfirm }) {
    // const { pending } = useFormStatus();
    return (
        <div>
            <h2 className='text-secondary-800 font-medium'>آیا از حذف {title} مطمئن هستید ؟</h2>
            <form action={onConfirm} className='grid grid-cols-2 gap-2 mt-2'>
                <Button variant='outline' onClick={onClose}>لغو</Button>
                <Button
                    variant='danger'
                    type='submit'
                    onClick={onConfirm}
                >تایید
{/* {pending ? <Loading/> :''} */}
                </Button>
            </form>
        </div>
    )
}

export default ConfirmDelete
